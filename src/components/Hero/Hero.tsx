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
            pt={50}
              direction="row"
              gap={{ base: 'sm', sm: 'lg' }}
            >
              <Button
                component='a'
                href='/contact'
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
                size="md"
                className={classes.control}
              >
                Contact Us
              </Button>

              <Button
                component='a'
                href='/book'
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
                size="md"
                className={classes.control}
              >
                Bookings
              </Button>

            </Flex>
          </div>
        </div>
      </Container>
    </div>
  );
}