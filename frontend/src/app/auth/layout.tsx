import AuthHeader from "@/components/authentication/ui/authHeader";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <AuthHeader />
        {children}
      </body>
    </html>
  );
}
