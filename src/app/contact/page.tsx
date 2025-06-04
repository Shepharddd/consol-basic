import { Banner } from "@/components/Banner/Baner";
import { GetInTouch } from "@/components/Contact/Contact";
import { Container, Title } from "@mantine/core";

export default function Contact() {
  return (
    <div className="flex flex-col justify-start">
      <Container py="xl">
        <Title
          order={2}
          size="h1"
          style={{ fontFamily: 'Outfit, var(--mantine-font-family)' }}
          fw={900}
          ta="center"
        >
          Get in touch
        </Title>

        <Banner />

        <GetInTouch />
      </Container>
    </div>
  );
}
