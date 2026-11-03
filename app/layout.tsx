import type { Metadata } from 'next';
import { Red_Hat_Display } from 'next/font/google';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { MotionProvider } from '@/components/motion/reveal';
import { SITE } from '@/lib/site';
import './globals.css';

const redHatDisplay = Red_Hat_Display({
  variable: '--font-red-hat-display',
  subsets: ['latin'],
});

const TITLE = `${SITE.name} | ${SITE.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: TITLE, template: `%s | ${SITE.name}` },
  description: SITE.description,
  openGraph: {
    title: TITLE,
    description: SITE.description,
    url: '/',
    siteName: SITE.name,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: SITE.description,
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en' className={`${redHatDisplay.variable} h-full antialiased`}>
      <body className='flex min-h-full flex-col'>
        <MotionProvider>
          <Header />
          <main className='flex-1'>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
