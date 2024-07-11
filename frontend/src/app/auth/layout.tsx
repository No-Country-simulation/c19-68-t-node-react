import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="login-header w-full p-10 pb-0 mt-10 flex flex-col place-items-center">
          <h1 className="font-bold text-3xl mb-2">E-Medicine</h1>
          <h2 className="">Comprehensive medicine in comfort of your home</h2>
        </div>
        {children}
      </body>
    </html>
  );
}
