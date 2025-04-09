import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <header className="bg-green-100 shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" className="text-xl font-bold text-green-800">
                    Sangha House LA
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    href="/about"
                    className="border-transparent text-green-600 hover:border-green-300 hover:text-green-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    About
                  </Link>
                  <Link
                    href="/events"
                    className="border-transparent text-green-600 hover:border-green-300 hover:text-green-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Events
                  </Link>
                  <Link
                    href="/contact"
                    className="border-transparent text-green-600 hover:border-green-300 hover:text-green-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

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
