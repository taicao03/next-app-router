import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
//* Components
import Footer from '@/components/common/footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Metub creator blog',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
