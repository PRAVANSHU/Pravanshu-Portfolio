import type { Metadata } from "next";
import "./globals.css";
import {Inter} from "next/font/google"

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Pravanshu Portfolio",
  description: "Transforming ideas into seamless and impactful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
