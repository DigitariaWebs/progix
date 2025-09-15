import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';
import DayPhrase from '@/components/DayPhrase';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Projix - Coming Soon',
  description: "We're building something amazing. Stay tuned!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable} font-sans antialiased`}>
        <div className="fixed top-4 right-4 z-50 px-4 py-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-lg shadow-sm">
          <DayPhrase />
        </div>
        {children}
      </body>
    </html>
  );
}
