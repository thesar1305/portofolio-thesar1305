import type { Metadata } from 'next';
import { Red_Hat_Display } from 'next/font/google';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import './globals.css';

const redHatDisplay = Red_Hat_Display({
  variable: '--font-red-hat-display',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Thesar Ramadhani | Portfolio',
  description:
    'Personal portfolio of Thesar Ramadhani, built with Next.js, Tailwind CSS, and Framer Motion.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en' className={`${redHatDisplay.variable} h-full antialiased`}>
      <body className='flex min-h-full flex-col'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
