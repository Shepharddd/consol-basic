export function contactEmailTemplate({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>New Message from ${name}</title>
      <style>
        body { font-family: Arial, sans-serif; background-color: #f9f9f9; color: #333; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; }
        .content { padding: 20px; }
        .field { margin-bottom: 10px; }
        .label { font-weight: bold; }
        .message { background: #f2f2f2; padding: 15px; border-radius: 6px; white-space: pre-line; margin-top: 5px; }
        .footer { text-align: center; font-size: 12px; color: #777; margin-top: 20px; border-top: 1px solid #eee; padding-top: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Table-based header for perfect vertical alignment -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background: #fff;">
          <tr>
            <td style="padding: 20px; vertical-align: middle;">
              <img src="https://qeklqgbmlliuwamjkzqy.supabase.co/storage/v1/object/public/images/rosmon-logo.png" alt="Rosmon Projects Logo" style="height:50px; display:block;" />
            </td>
            <td style="padding: 20px; vertical-align: middle;">
              <span style="font-size:20px; font-weight:bold;">New Website Enquiry</span>
            </td>
          </tr>
        </table>

        <div class="content">
          <div class="field"><span class="label">Name:</span> ${name}</div>
          <div class="field"><span class="label">Email:</span> ${email}</div>
          <div class="field"><span class="label">Subject:</span> ${subject}</div>
          <div class="field"><span class="label">Message:</span></div>
          <div class="message">${message}</div>
        </div>

        <div class="footer">Sent from rosmonprojects.com.au contact form</div>
      </div>
    </body>
  </html>
  `;
}
