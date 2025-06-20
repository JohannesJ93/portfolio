import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientOnlyThemeProvider from '../ClientOnlyThemeProvider'; // Adjust the path as necessary
import Link from 'next/link';
import NavBar from "./components/navbars/navbar";
import TestPage from "./test/page";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Johannes Jokinen",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnlyThemeProvider>
          <Analytics/>
          <TestPage/>
          <NavBar />
          {children}
        </ClientOnlyThemeProvider>
      </body>
    </html>
  );
}
