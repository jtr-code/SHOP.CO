import React from 'react';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: 'Shop.Co',
  description: 'An ecommerce app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-theme='light'>
      <body className={`${openSans.variable} font-open-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
