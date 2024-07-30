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
<<<<<<< HEAD
        {<BallBackground />}
        {<Navbar />}
=======
        <BallBackground />
>>>>>>> e48fee99b803055fe7fbac677607b30a2bf89ac7
        {children}
      </body>
    </html>
  );
}
