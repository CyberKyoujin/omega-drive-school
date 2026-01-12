import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
  licenseClass: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message, licenseClass }: ContactFormRequest = await req.json();

    // Input validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Name, E-Mail und Nachricht sind erforderlich." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Ungültige E-Mail-Adresse." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    console.log("Sending contact email for:", { name, email, licenseClass });

    // Send notification email to Fahrschule
    const notificationEmail = await resend.emails.send({
      from: "Fahrschule OMEGA <onboarding@resend.dev>",
      to: ["novakovdenis11@gmail.com"], // Replace with actual email
      subject: `Neue Anfrage von ${name} - Fahrschule OMEGA`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            Neue Kontaktanfrage
          </h1>
          <div style="background: #f4f4f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone || "Nicht angegeben"}</p>
            <p><strong>Führerscheinklasse:</strong> ${licenseClass || "Nicht angegeben"}</p>
          </div>
          <div style="background: #fff; padding: 20px; border: 1px solid #e4e4e7; border-radius: 8px;">
            <h3>Nachricht:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #71717a; font-size: 12px; margin-top: 20px;">
            Diese Nachricht wurde über das Kontaktformular auf der Website gesendet.
          </p>
        </div>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    // Send confirmation email to customer
    const confirmationEmail = await resend.emails.send({
      from: "Fahrschule OMEGA <onboarding@resend.dev>",
      to: [email],
      subject: "Vielen Dank für Ihre Anfrage - Fahrschule OMEGA",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #f97316;">Vielen Dank für Ihre Anfrage!</h1>
          <p>Hallo ${name},</p>
          <p>wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>
          <div style="background: #f4f4f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Ihre Anfrage:</h3>
            <p><strong>Führerscheinklasse:</strong> ${licenseClass || "Nicht angegeben"}</p>
            <p><strong>Nachricht:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <div style="background: #1e293b; color: white; padding: 20px; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #f97316;">Fahrschule OMEGA</h3>
            <p style="margin: 5px 0;">📍 Alte Poststr 25, 49074 Osnabrück</p>
            <p style="margin: 5px 0;">📞 0176 24137205</p>
            <p style="margin: 5px 0;">🕐 Mo. & Do. 19:00-20:30 Uhr</p>
          </div>
          <p style="color: #71717a; font-size: 12px; margin-top: 20px;">
            Mit freundlichen Grüßen,<br>Ihr Team von Fahrschule OMEGA
          </p>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Nachricht erfolgreich gesendet!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      },
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
