'use client'
import {
  Card,
  Container,
  SimpleGrid,
  Image,
  Text,
  Title,
  Button,
} from '@mantine/core';
import classes from './Feature.module.css';

const mockdata = [
  {
    img: "/residential.jpg",
    title: 'Residential',
  },
  {
    img: "/commercial.jpg",
    title: 'Commercial',

  },
  {
    img: "/fitout.jpeg",
    title: 'Retail',
  },
];

export function Feature() {
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <Card.Section>
          <Image src={feature.img} height={180} />
      </Card.Section>
      <Text fz="lg" mb="md" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>

      <Button 
        component="a"
        size="md" 
        color="dark"
        href="/book"
      >
          Book Consultation
      </Button>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Our Services
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        We have extensive experience across multiple industries. Throughout all our sites we have implemented modern methodologies that delivers innovative solutions for any space or building type.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}