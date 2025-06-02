"use client"
import { Anchor, Box, Burger, Container, Flex, Group, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Drawer, Divider } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';




const userLinks = [
  { link: 'mailto:micheal@rosmon.com', label: 'micheal@rosmon.com' },
  { link: 'tel:041 726 581', label: '0412 726 581' },
];

const mainLinks = [
  { link: '/', label: 'About' },
  { link: '/projects', label: 'Projects' },
  { link: '/book', label: 'Consultations' },
  { link: '/contact', label: 'Contact' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const pathname = usePathname()
  const active = mainLinks.findIndex((val) => val.link === pathname)

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={index === active || undefined}
    >
      {item.label}
    </Anchor>
  ));

  const secondaryItems = userLinks.map((item) => (
    <Anchor
      href={item.link}
      key={item.label}
      className={classes.secondaryLink}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
          <Image width={150} height={50} src="/rosmon.png" alt='img' />
        <Box className={classes.links} visibleFrom="sm">
          <Group justify="flex-end">{secondaryItems}</Group>
          <Group gap={0} justify="flex-end" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </Box>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
          hiddenFrom="sm"
        />
      </Container>
      <Drawer
        opened={opened}
        onClose={toggle}
        title={
          <Image width={150} height={50} src="/rosmon.png" alt='img' />
        }
        padding="md"
        size="xs"
        withCloseButton={false}
      >
        <Flex
          direction="column"
          gap="md"
        >
          {mainLinks.map((item) => (
            <NavLink 
              key={item.label}
              href={item.link}
              label={item.label}
              rightSection={
                <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
              }

            />
          ))}
        </Flex>
        <Flex
          direction="column"
          align="center"
          w="100%"
          gap="xs"
          pos="fixed"
          bottom={10}
          left={0}
          pb={20}
        >
          <Divider />
          <Box>PO Box: 142, Bondi NSW 2026</Box>
          <Box>Email: <a href='mailto:micheal@rosmon.com'> micheal@rosmon.com</a></Box>
          <Box>Phone: <a href='mailto:micheal@rosmon.com'> 041 726 581</a></Box>
        </Flex>
      </Drawer>
    </header>
  );
}