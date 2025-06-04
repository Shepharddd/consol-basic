import { Box, Flex, Group, Image, Text, Title } from '@mantine/core';
import classes from './Banner.module.css';

export function Banner() {
  return (
    <Flex
      className={classes.wrapper}
      direction={{base: "column-reverse", sm: 'row'}}
      p={{base: 64, sm: 32}}
      align="center"
    >
      <Box
        pr={{base: 0, sm: 128}}
        mt={{base: 32, sm: 0}}
      >
        <Title className={classes.title}>Micheal Cunningham</Title>
        <Text fw={500} fz="lg" mb={5}>
          Managing Director
        </Text>
        <Text fz="sm" c="dimmed">
          You will never miss important product updates, latest news and community QA sessions. Our
          newsletter is once a week, every Sunday.
        </Text>
        <Group mt={30}>
          <Text fz="md">
            Email: <a href='mailto:micheal@rosmon.com'>micheal@rosmon.com</a>
          </Text>
          <Text fz="md">
            Phone: <a href='tel:041 726 581'>+61 412 726 581</a>
          </Text>
        </Group>

      </Box>
      <Image
        radius={10}
        maw={{base: "100%", sm: "40%"}}
        alt='Managing director'
        src="https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </Flex>
  );
}