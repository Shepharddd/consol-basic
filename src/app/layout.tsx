import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../../theme';
import { Header } from '@/components/Header/Header';
// import { Footer } from '@/components/Footer/Footer';

export const metadata = {
  title: "Rosmon Projects | Sydney Construction Company",
  description:
    "We make dreams come true, one build at a time. Rosmon Projects is a Sydney-based construction company known for quality workmanship, safety, and delivering exceptional results on every project.",
  keywords: [
    "Sydney construction company",
    "building contractors Sydney",
    "Rosmon Projects",
    "commercial builders Sydney",
    "residential construction Sydney",
    "NSW builders",
  ],
  authors: [{ name: "Rosmon Projects" }],
  creator: "Rosmon Projects",
  publisher: "Rosmon Projects",
  openGraph: {
    title: "Rosmon Projects | Sydney Construction Company",
    description:
      "We make dreams come true, one build at a time. Rosmon Projects delivers high-quality commercial and residential construction across Sydney.",
    url: "https://rosmon.com",
    siteName: "Rosmon Projects",
    images: [
      {
        url: "/rosmon.jpg",
        width: 1200,
        height: 630,
        alt: "Rosmon Projects construction site in Sydney",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rosmon Projects | Sydney Construction Company",
    description:
      "We make dreams come true, one build at a time. Rosmon Projects delivers high-quality building outcomes across Sydney and NSW.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://rosmon.com",
  },
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
      <body className="min-h-screen flex flex-col">
        <MantineProvider theme={theme}>
          <div className="flex flex-col min-h-screen">
            <Header />
            {/* Make main content grow to fill space */}
            <main className="flex-1">{children}</main>
            <footer className="mt-auto">
              {/* <Footer /> */}
            </footer>
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}