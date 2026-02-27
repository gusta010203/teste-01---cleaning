import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ana Rosa Cleaning | Trusted Home Cleaning in Manhattan',
  description: 'Personalized, detailed, and reliable cleaning services in Manhattan. Over 16 years of experience. Get a free estimate today.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-slate-600 bg-white selection:bg-sky-100 selection:text-sky-900">
        {children}
      </body>
    </html>
  );
}
