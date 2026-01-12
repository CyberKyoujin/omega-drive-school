import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name ist erforderlich").max(100, "Name ist zu lang"),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255, "E-Mail ist zu lang"),
  phone: z.string().max(30, "Telefonnummer ist zu lang").optional(),
  licenseClass: z.string().optional(),
  message: z.string().trim().min(1, "Nachricht ist erforderlich").max(2000, "Nachricht ist zu lang"),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "Sie müssen der Datenschutzerklärung zustimmen",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    licenseClass: "",
    message: "",
    privacyConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const { toast } = useToast();

  const handleChange = (field: keyof ContactFormData, value: string | boolean) => {
    const newValue = field === "privacyConsent" ? value === "true" || value === true : value;
    setFormData((prev) => ({ ...prev, [field]: newValue }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: result.data,
      });

      if (error) throw error;

      setIsSuccess(true);
      toast({
        title: "Nachricht gesendet!",
        description: "Wir werden uns schnellstmöglich bei Ihnen melden.",
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          licenseClass: "",
          message: "",
          privacyConsent: false,
        });
        setIsSuccess(false);
      }, 3000);
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es später erneut oder rufen Sie uns an.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
          <CheckCircle className="h-10 w-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Vielen Dank!</h3>
        <p className="text-muted-foreground">
          Ihre Nachricht wurde erfolgreich gesendet.
        </p>
      </motion.div>
    );
  }

  return (
    <Card className="card-gradient border-border/50">
      <CardHeader>
        <CardTitle className="text-2xl">Nachricht senden</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              placeholder="Ihr vollständiger Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-Mail *</Label>
            <Input
              id="email"
              type="email"
              placeholder="ihre@email.de"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefon</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="0176 12345678"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="licenseClass">Gewünschte Führerscheinklasse</Label>
            <Select
              value={formData.licenseClass}
              onValueChange={(value) => handleChange("licenseClass", value)}
            >
              <SelectTrigger id="licenseClass">
                <SelectValue placeholder="Bitte auswählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="B">Klasse B</SelectItem>
                <SelectItem value="BE">Klasse BE</SelectItem>
                <SelectItem value="B197">Klasse B197</SelectItem>
                <SelectItem value="andere">Andere / Unsicher</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Nachricht *</Label>
            <Textarea
              id="message"
              placeholder="Wie können wir Ihnen helfen?"
              rows={4}
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className={errors.message ? "border-destructive" : ""}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="privacyConsent"
                checked={formData.privacyConsent}
                onCheckedChange={(checked) => 
                  handleChange("privacyConsent", checked === true ? "true" : "false")
                }
                className={errors.privacyConsent ? "border-destructive" : ""}
              />
              <Label 
                htmlFor="privacyConsent" 
                className="text-sm leading-relaxed cursor-pointer"
              >
                Ich habe die{" "}
                <Link 
                  to="/datenschutz" 
                  className="text-primary hover:underline"
                  target="_blank"
                >
                  Datenschutzerklärung
                </Link>{" "}
                gelesen und stimme der Verarbeitung meiner Daten zu. *
              </Label>
            </div>
            {errors.privacyConsent && (
              <p className="text-sm text-destructive">{errors.privacyConsent}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full text-lg py-6 glow-effect"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Wird gesendet...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Nachricht senden
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            * Pflichtfelder
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
