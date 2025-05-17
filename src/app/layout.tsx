import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Providers } from "./Providers";
import Content from "./components/Content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlackTube",
  description: "Explore YouTube Videos in a Tech friendly UIUX ⚡",
icons: {
    icon: "https://i.imgur.com/G7oYvV1.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` max-w-screen hide-scrollbar geistsans bg-black h-auto ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="min-h-screen w-full bg-black text-white font-roboto">
            {/* Header Section */}
            <Navbar />

            <main className="w-full h-auto flex">
              {/* Sidebar Section */}
              <Sidebar />

              {/* Main Content Section */}
              <Content children={children} />
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
