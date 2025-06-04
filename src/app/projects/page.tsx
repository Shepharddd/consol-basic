import { AspectRatio, Container, SimpleGrid, Title, Image } from "@mantine/core";

const mockdata = [
  {
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=3548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=3548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Living Room",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661902468735-eabf780f8ff6?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Bathroom",
  },
  {
    img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Bedroom",
  },
  {
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Office",
  },
  {
    img: "https://images.unsplash.com/photo-1633330948542-0b3bdeefcdb3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Garden",
  },
];

export default function Contact() {
  return (
    <div className="flex flex-col justify-start">
      <Container py="xl">
        <Title order={2} ta="center" mt="sm">
          Projects
        </Title>
        <SimpleGrid
          mt={20}
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}
        >
          {mockdata.map((entry, index) => (
            <AspectRatio key={index} ratio={1} >
              <Image src={entry.img} alt={entry.title}  />
            </AspectRatio>
          ))}
          {mockdata.map((entry, index) => (
            <AspectRatio key={index} ratio={1} >
              <Image src={entry.img} alt={entry.title}  />
            </AspectRatio>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
}
