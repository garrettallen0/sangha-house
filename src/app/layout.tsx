import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/Navigation';
import NewsletterSidebar from '@/components/NewsletterSidebar';
import FooterWrapper from '@/components/FooterWrapper';

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
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 flex justify-center">
            <main className="w-full max-w-7xl px-4 sm:px-6 lg:px-16 py-8">
              {children}
            </main>
          </div>
          <aside className="w-full lg:w-[350px] px-4 lg:px-0 lg:shrink-0 lg:pt-80 flex flex-col">
            <NewsletterSidebar />
          </aside>
        </div>
        <FooterWrapper />
      </body>
    </html>
  );
}
