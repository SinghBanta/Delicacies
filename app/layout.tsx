import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Delicacies",
  description: "A grocery app made for people who love to eat healthy and delicious food.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
