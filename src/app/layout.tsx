import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/Navigation';
import SidebarContent from '@/components/SidebarContent';
import FooterWrapper from '@/components/FooterWrapper';
import Banner from '@/components/Banner';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sangha House LA",
  description: "A community of mindful living",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-green-50`}>
        <Navigation />
        <Banner />
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 flex justify-center">
            <main className="w-full max-w-7xl px-4 sm:px-6 lg:px-16 py-8">
              {children}
            </main>
          </div>
          <aside className="w-full lg:w-[350px] px-4 lg:px-0 lg:shrink-0 lg:pt-20 flex flex-col">
            <SidebarContent />
          </aside>
        </div>
        <FooterWrapper />
      </body>
    </html>
  );
}
