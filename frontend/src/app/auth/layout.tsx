import AuthHeader from "@/components/authentication/ui/authHeader";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={manrope.className}>
      <AuthHeader />
      {children}
    </div>
  );
}
