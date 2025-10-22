import { AspectRatio, Container, SimpleGrid, Title, Image } from "@mantine/core";

type Image = {
  alt: string;
  src: string;
};

type Project = {
  name: string;
  imgs: Image[];
};

const mockProjects: Project[] = [
  {
    name: "14 The Avenue",
    imgs: [
      {
        alt: "Bathroom",
        src: "https://qeklqgbmlliuwamjkzqy.supabase.co/storage/v1/object/public/images/14%20The%20Avenue/Original22498769.jpg",
      },
      {
        alt: "Master Bedroom",
        src: "https://qeklqgbmlliuwamjkzqy.supabase.co/storage/v1/object/public/images/14%20The%20Avenue/Original22498770.jpg",
      },
      {
        alt: "Living Room",
        src: "https://qeklqgbmlliuwamjkzqy.supabase.co/storage/v1/object/public/images/14%20The%20Avenue/Original22498772.jpg",
      },
      {
        alt: "Living Room",
        src: "https://qeklqgbmlliuwamjkzqy.supabase.co/storage/v1/object/public/images/14%20The%20Avenue/Original22498777.jpg",
      },
      {
        alt: "Back Garden",
        src: "https://qeklqgbmlliuwamjkzqy.supabase.co/storage/v1/object/public/images/14%20The%20Avenue/Original22498778.jpg",
      },
      {
        alt: "Kitchen",
        src: "https://qeklqgbmlliuwamjkzqy.supabase.co/storage/v1/object/public/images/14%20The%20Avenue/Original22503350.jpg",
      },
    ],
  },
  {
    name: "8/8A Clifton Road",
    imgs: [
      {
        alt: "Front View",
        src: "https://qeklqgbmlliuwamjkzqy.supabase.co/storage/v1/object/public/images/8%20Clifton%20Road/8A%20Clifton%20Rd%20Clovelly%20(23%20of%2023).jpg",
      },
        {
        alt: "Entry",
        src: "https://qeklqgbmlliuwamjkzqy.supabase.co/storage/v1/object/public/images/8%20Clifton%20Road/8%20Clifton%20Rd%20Clovelly%20(1%20of%2028).jpg",
      },
      {
        alt: "Back Garden and Patio",
        src: "https://qeklqgbmlliuwamjkzqy.supabase.co/storage/v1/object/public/images/8%20Clifton%20Road/8%20Clifton%20Rd%20Clovelly%20(15%20of%2028).jpg",
      },
      {
        alt: "Open Kitchen Design",
        src: "https://qeklqgbmlliuwamjkzqy.supabase.co/storage/v1/object/public/images/8%20Clifton%20Road/8%20Clifton%20Rd%20Clovelly%20(17%20of%2028).jpg",
      },
      {
        alt: "Bedroom",
        src: "https://qeklqgbmlliuwamjkzqy.supabase.co/storage/v1/object/public/images/8%20Clifton%20Road/8%20Clifton%20Rd%20Clovelly%20(27%20of%2028).jpg",
      },
      {
        alt: "Stairway",
        src: "https://qeklqgbmlliuwamjkzqy.supabase.co/storage/v1/object/public/images/8%20Clifton%20Road/8%20Clifton%20Rd%20Clovelly%20(3%20of%2028).jpg",
      },
      {
        alt: "Living Room",
        src: "https://qeklqgbmlliuwamjkzqy.supabase.co/storage/v1/object/public/images/8%20Clifton%20Road/8%20Clifton%20Rd%20Clovelly%20(9%20of%2028).jpg",
      },
    ],
  },
];


export default function Projects() {
  return (
    <div className="flex flex-col justify-start">
      <Container py="xl">
       {mockProjects.map((project) => <ProjectsSection project={project}/>)}
      </Container>
    </div>
  );
}

function ProjectsSection({project}: {project: Project}) {
  return (
    <div className="flex flex-col justify-start">
      <Container py="xl">
        <Title order={2} ta="start" mt="sm">
          {project.name}
        </Title>
        <SimpleGrid
          mt={20}
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}
        >
          {project.imgs.map((entry, index) => (
            <AspectRatio key={index} ratio={1} >
              <Image src={entry.src} alt={entry.alt}  />
            </AspectRatio>
          ))}
          {/* {mockdata.map((entry, index) => (
            <AspectRatio key={index} ratio={1} >
              <Image src={entry.img} alt={entry.title}  />
            </AspectRatio>
          ))} */}
        </SimpleGrid>
      </Container>
    </div>
  );
}

