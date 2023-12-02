import type { Metadata } from 'next';

import { PT_Sans } from 'next/font/google';
import './globals.css';

const pt_sans = PT_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'BLANK Startup',
  description: 'Inovação para sua empresa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <body className={pt_sans.className}>{children}</body>
    </html>
  );
}
