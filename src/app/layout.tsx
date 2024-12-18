import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import AppSidebar from "@/components/AppSidebar";
import "./globals.css";
import {Toaster} from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Album",
  description: "You can saves your favorites photos on cloundinary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
    <Navbar/>
    <main className='flex w-full'>
      <AppSidebar/>
        {children}
    </main>
    <Toaster/>
    </body>
    </html>
  );
}
