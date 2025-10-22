import { Box, Container, Grid, GridCol } from "@mantine/core";
import Image from 'next/image';


export function Associations() {
  return (
    <Container size="lg" py="xl" my="md">
      <Grid>
        <GridCol span={{base: 6, md: 4, lg: 3}}>
          <Box pos="relative" display="flex"
            h={{base: 50, md: 80}}
            w={{base: 150, md: 200}}
          >
            <Image fill={true} alt="hia" src="/hia-80.png" />
          </Box>
        </GridCol>
        <GridCol span={{base: 6, md: 4, lg: 3}}>
          <Box pos="relative" display="flex"
            h={{base: 50, md: 80}}
            w={{base: 150, md: 200}}
          >
            <Image fill={true} alt="bpb" src="/bpb.png" />
          </Box>
        </GridCol>
        <GridCol span={{base: 6, md: 4, lg: 3}}>
          <Box pos="relative" display="flex"
            h={{base: 50, md: 80}}
            w={{base: 150, md: 200}}
          >
            <Image fill={true} alt="mba" src="/MBA.png" />
          </Box>
          </GridCol>
        <GridCol span={{base: 6, md: 4, lg: 3}}>
          <Box pos="relative" display="flex"
            h={{base: 50, md: 80}}
            w={{base: 150, md: 200}}
          >
            <Image fill={true} alt="aibs" src="/AIBS.png" />
          </Box>
        </GridCol>
      </Grid>
    </Container>
  )
}