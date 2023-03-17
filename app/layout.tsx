import { ReactNode } from 'react';

import { inter } from '&/app/fonts';
import { Footer } from '&/components/footer';
import Navigation from '&/components/navigation';

import 'cal-sans';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Navigation />
        <main className="container mx-auto my-24 px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
