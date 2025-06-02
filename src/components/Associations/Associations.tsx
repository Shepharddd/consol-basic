"use client"
import { Box, Container, Grid } from "@mantine/core";
import Image from 'next/image';


export function Associations() {
  return (
    <Container size="lg" py="xl" my="md">
      <Grid>
        <Grid.Col span={{base: 6, md: 4, lg: 3}}>
          <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Image height={80} width={200} alt="hia" src="/hia-80.png" />
          </Box>
        </Grid.Col>
        <Grid.Col span={{base: 6, md: 4, lg: 3}}>
          <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Image height={80} width={200} alt="bpb" src="/bpb.png" />
          </Box>
        </Grid.Col>
        <Grid.Col span={{base: 6, md: 4, lg: 3}}>
          <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Image height={80} width={220} alt="mba" src="/MBA.png" />
          </Box>
          </Grid.Col>
        <Grid.Col span={{base: 6, md: 4, lg: 3}}>
          <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Image height={80} width={150} alt="aibs" src="/AIBS.png" />
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  )
}