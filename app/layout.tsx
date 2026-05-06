import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Marshall Collage Generator',
  description: 'Internal tool for generating animated photo collages',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
