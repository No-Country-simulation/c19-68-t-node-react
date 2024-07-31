import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BallBackground from "@/components/ui/ballBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-medicine",
  description: "E-medicine appointment scheduling made easy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative flex flex-col-reverse lg:flex lg:flex-row`}
      >
        {<BallBackground />}
        {children}
      </body>
    </html>
  );
}
