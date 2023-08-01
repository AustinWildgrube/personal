import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local'

import { Analytics } from '@vercel/analytics/react';

import { Footer } from '&/components/footer';
import { Navigation } from '&/components/navigation';
import { Spotify } from '&/components/spotify';

import './globals.css';

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
});

const lausanne = localFont({
  display: 'swap',
  src: [
    {
      path: './fonts/lausanne-300.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/lausanne-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/lausanne-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/lausanne-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/lausanne-700.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/lausanne-800.woff2',
      weight: '800',
      style: 'normal',
    }
  ],
  variable: '--font-lausanne',
})


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lausanne.variable} relative`}>
        <Navigation />
        <main className="container mx-auto my-24 px-8">{children}</main>
        <Spotify />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
