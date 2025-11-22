import { AspectRatio, Button, Container, Group, Image, SimpleGrid, Title } from '@mantine/core';
import classes from "./Gallery.module.css"
import { IconArrowRight } from '@tabler/icons-react';

const mockdata = [
  {
    alt: "Front View",
    src: "https://hgkbikwbaumtxaxmgbgt.supabase.co/storage/v1/object/public/images/8%20Clifton%20Road/8A%20Clifton%20Rd%20Clovelly%20(23%20of%2023).jpg",
  },
  {
    alt: "Stairway",
    src: "https://hgkbikwbaumtxaxmgbgt.supabase.co/storage/v1/object/public/images/8%20Clifton%20Road/8%20Clifton%20Rd%20Clovelly%20(3%20of%2028).jpg",
  },
  {
    alt: "Living Room",
    src: "https://hgkbikwbaumtxaxmgbgt.supabase.co/storage/v1/object/public/images/14%20The%20Avenue/Original22498772.jpg",
  },
  {
    alt: "Open Kitchen Design",
    src: "https://hgkbikwbaumtxaxmgbgt.supabase.co/storage/v1/object/public/images/8%20Clifton%20Road/8%20Clifton%20Rd%20Clovelly%20(17%20of%2028).jpg",
  },
  {
    alt: "Back Garden and Patio",
    src: "https://hgkbikwbaumtxaxmgbgt.supabase.co/storage/v1/object/public/images/8%20Clifton%20Road/8%20Clifton%20Rd%20Clovelly%20(15%20of%2028).jpg",
  },
  {
    alt: "Bedroom",
    src: "https://hgkbikwbaumtxaxmgbgt.supabase.co/storage/v1/object/public/images/8%20Clifton%20Road/8%20Clifton%20Rd%20Clovelly%20(27%20of%2028).jpg",
  },
];

export function Gallery() {
  return (
    <Container size="lg" py="xl" my="md">

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Gallery
      </Title>

      <Group justify="flex-end" mt="md">
        <Button component="a" mr="sm" variant="light" rightSection={<IconArrowRight size={14} />} href='/projects'>
          View All Projects
        </Button>
      </Group>

      <SimpleGrid
        mt={20}
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: 'xl' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
      >
        {mockdata.map((entry, index) => (
          <AspectRatio key={index} ratio={1} >
            <Image src={entry.src} alt={entry.alt}  />
          </AspectRatio>
        ))}
      </SimpleGrid>
    </Container>
  );
}
