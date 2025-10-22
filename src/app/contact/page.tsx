import { GetInTouch } from "@/components/Contact/Contact";
import { contactEmailTemplate } from "@/lib/emailTemplate";
import { Container, Title } from "@mantine/core";
import nodemailer from "nodemailer";


type Email = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  async function sendEmail(values: Email) {
    "use server"
    const { name, email, subject, message } = values;

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      // Send the email
     await transporter.sendMail({
      from: `"Rosmon Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New message from ${name}: ${subject}`,
      html: contactEmailTemplate({ name, email, subject, message }),
    });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
      }}
    >
      <Container size="sm" py="xl">
        <Title
          order={2}
          size="h1"
          style={{ fontFamily: "Outfit, var(--mantine-font-family)" }}
          fw={900}
          ta="center"
          // mb="xl"
        >
          Get in touch
        </Title>

        <GetInTouch sendEmail={sendEmail} />
      </Container>
    </div>
  );
}
