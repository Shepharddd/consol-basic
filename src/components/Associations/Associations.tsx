import { Container, Flex } from "@mantine/core";
import Image from 'next/image';


export function Associations() {
  return (
    <Container size="lg" py="xl">
      <Flex 
        pt={20}
        pb={20}
        justify="space-between"
      >
        <Image
          height={100}
          width={100}
          alt="hia"
          src="/HIA.jpeg"
        />
        <Image
          height={100}
          width={250}
          alt="bpb"
          src="/bpb.png"
        />
        <Image
          height={100}
          width={270}
          alt="bpb"
          src="/MBA.png"
        />
        <Image
          height={100}
          width={170}
          alt="bpb"
          src="/AIBS.png"
        />
      </Flex>
    </Container>
  )
}