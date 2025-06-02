import { Anchor, Container, Group } from '@mantine/core';
import Image from 'next/image';
import classes from './Footer.module.css';

const links = [
  { link: '/', label: 'About' },
  { link: '/projects', label: 'Projects' },
  { link: '/book', label: 'Consultations' },
  { link: '/contact', label: 'Contact' },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor<'a'>
      c="dimmed"
      key={link.label}
      href={link.link}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Image width={100} height={40} src="/rosmon.png" alt='img' />
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}