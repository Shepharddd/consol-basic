import '@mantine/core/styles.css';

import React from 'react';
import { Box, ColorSchemeScript, Flex, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../../theme';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';


export const metadata = {
  title: 'Rosmon Projects',
  description: '',
};

export default function RootLayout({ children }: { children: any }) {

  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/icon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Flex direction="column" mih="100vh" miw="100hw">
            <Header />
              {children}
            <Box mt="auto">
              <Footer />
            </Box>
          </Flex>
        </MantineProvider>
      </body>
    </html>
  );
}