import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'react-medium-image-zoom/dist/styles.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Suehiro's Portfolio",
  description:
    'このサイトは末廣のポートフォリオサイトです。私はwebエンジニアとして活動しており、webサイトの制作をしています。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
