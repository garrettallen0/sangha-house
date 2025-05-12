import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/Navigation';
import NewsletterSidebar from '@/components/NewsletterSidebar';

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
          <aside className="w-full lg:w-[350px] px-4 lg:px-0 lg:shrink-0 lg:py-8">
            <NewsletterSidebar />
          </aside>
        </div>
        <footer className="bg-green-100 border-t border-green-200">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-green-600 text-sm">
              © {new Date().getFullYear()} Sangha House. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
