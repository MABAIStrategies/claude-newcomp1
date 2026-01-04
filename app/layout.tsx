import type { Metadata } from 'next';
import { Cinzel, Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CursorTrail from '@/components/interactive/CursorTrail';
import Analytics from '@/components/Analytics';
import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MAB AI Strategies | Custom AI Solutions & Automation',
  description:
    'Elite AI agents, custom automations, and web applications for discerning businesses. Scale your intelligence with MAB AI Strategies.',
  keywords: ['AI agents', 'automation', 'custom web apps', 'business intelligence'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="font-inter antialiased bg-starry-night text-off-white">
        <Analytics />
        <CursorTrail />
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
