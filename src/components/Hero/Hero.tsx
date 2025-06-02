import { Button, Container, Flex, Text, Title } from '@mantine/core';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title} style={{ color: '#fff' }}>
             We make dreams come true, one build at a time.
            </Title>

            <Text className={classes.description} style={{ color: '#fff' }} mt={30}>
              Rosmon Projects a Sydney-Based building company that has contributed to the construction of many significant landmarks in the heart of Sydney and greater region. We pride ourselves in the quality of our work and delivering exceptional project outcomes for our clients. Our end-to-end construction services comply and exceed all Australian Standards and Work Health &amp; Safety (WHS) Regulations.
            </Text>

            <Flex 
              direction="row"
              gap="md"
            >

              <Button
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
                size="xl"
                className={classes.control}
                mt={40}
              >
                Contact Us
              </Button>

              <Button
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
                size="xl"
                className={classes.control}
                mt={40}
              >
                Book a Consult
              </Button>
            </Flex>
          </div>
        </div>
      </Container>
    </div>
  );
}