"use client";

import { Button, Container, Group, SimpleGrid, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";

type Email = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

interface GetInTouchProps {
  sendEmail: (values: Email) => Promise<boolean>;
}

export function GetInTouch({ sendEmail }: GetInTouchProps) {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  const handleSubmit = async (values: Email) => {
    setLoading(true);
    const success = await sendEmail(values);
    setLoading(false);
    setSent(success);
  };

  return (
    <Container>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps("email")}
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps("subject")}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps("message")}
        />

        <Group justify="center" mt="xl">
          <Button type="submit" size="md" loading={loading}>
            {sent ? "Sent!" : "Send message"}
          </Button>
        </Group>
      </form>
    </Container>
  );
}
