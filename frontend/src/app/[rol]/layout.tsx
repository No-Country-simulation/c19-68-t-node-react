import Navbar from "@/components/Navbar";
import BallBackground from "@/components/ui/ballBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      {/* <BallBackground /> */}
      {children}
      <Navbar />
    </section>
  );
}
