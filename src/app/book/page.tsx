"use client"
import { Box, Button, Flex, Grid, Group, Title, Text, Card } from "@mantine/core";
import { useState } from 'react';
import { DatePicker, getTimeRange, TimeGrid } from '@mantine/dates';
import '@mantine/dates/styles.css';
import { ServiceSelect } from "@/components/ServiceSelect/ServiceSelect";


const services = [
  { title: 'Site Feasibility', description: 'Evaluate land conditions, zoning, and legal restrictions to determine project viability.', price: 250 },
  { title: 'Pre-Construction', description: 'Discuss budget, timelines, permits, and design considerations before breaking', price: 200 },
  { title: 'Remodeling & Renovation', description: 'Advice on structural changes, layout improvements, and compliance for home or office remodels.', price: 350 },
  { title: 'Green Building Strategy', description: 'Explore sustainable materials, energy-efficient systems, and LEED certification potential.', price: 250},
  { title: 'Commercial Project', description: 'Analyze plans for commercial buildings, code compliance, and long-term maintenance strategy.', price: 500},
  { title: 'On-Site Structural', description: 'A field consultation to inspect foundations, framing, or damage issues on an active site.', price: 200},
];


export default function Contact() {
  const [ service, setService ] = useState(-1);
  const [ date, setDate ] = useState<string | null>(null);
  const  [ time, setTime ] = useState<string | null>('07:00');

  return (
    <Box mx="auto" w={{base: "100%", md: "75%"}}>
      <Title
        order={2}
        size="h1"
        style={{ fontFamily: 'Outfit, var(--mantine-font-family)' }}
        fw={900}
        ta="center"
        my={50}
      >
        Book a Consultation
      </Title>
      <Grid gutter={50}>
        <Grid.Col span={{base: 12, xl: 4}}>
          <ServiceSelect checked={service} setChecked={setService} data={services} />
        </Grid.Col>
        <Grid.Col span={{base: 12, xl: 4}}>
          <Flex align="center" justify="center">
            <DatePicker size="lg" value={date} onChange={setDate} />
          </Flex>
        </Grid.Col>
        <Grid.Col span={{base: 12, xl: 4}}>
          <TimeGrid
            size="lg"
            data={getTimeRange({ startTime: '7:00', endTime: '15:00', interval: '01:00' })}
            simpleGridProps={{
              type: 'container',
              cols: 2,
              spacing: 'lg',
            }}
            withSeconds={false}
            value={time} onChange={setTime} 
          />
        </Grid.Col>
      </Grid>
      <Card m={50} shadow="sm" padding="lg" radius="md" withBorder>
        <Group justify="space-between">
          <Flex direction="column">
            <Text fw={700} size="lg">Service: {services.at(service)?.title} - 1hr</Text>
            <Text fw={500} size="lg">Time: {time}, {date}</Text>
          </Flex>
          <Group>
            <Text size="xl">Total: A${services.at(service)?.price}</Text>
            <Button>Confirm</Button>
          </Group>
        </Group>
      </Card>
    </Box>
  );
}