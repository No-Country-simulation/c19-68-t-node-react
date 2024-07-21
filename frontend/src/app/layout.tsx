import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-medicine",
<<<<<<< HEAD
  description: "E-medicine appointment scheduling made easy.",
=======
  description: "Medical appointment videocall scheduling made easy.",
>>>>>>> 7cc2b2aa275142b7c703138c8060d94a4ee46c95
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={inter.className}>
        {children}</body>
        {/* Footer Navigation */}
<div className="w-[430px] h-[60px] fixed bottom-0 left-0 right-0 bg-blue-900 text-white shadow-lg flex justify-between px-6 py-2">
    <button className="flex flex-col items-center text-gray-300 transition transform hover:-translate-y-11 motion-reduce:transition-none motion-reduce:hover:transform-none ">
        <img className="w-6 h-6 mb-1" src="/llave-inglesa.png" alt="Configuración" />
        <span className="text-xs">Configuración</span>
    </button>
    <button className="flex flex-col items-center text-gray-300 transition transform hover:-translate-y-11 motion-reduce:transition-none motion-reduce:hover:transform-none">
        <img className="w-6 h-6 mb-1" src="/calendario-reloj.png" alt="Agenda" />
        <span className="text-xs">Agenda</span>
    </button>
    <button className="flex flex-col items-center text-gray-300 transition transform hover:-translate-y-11 motion-reduce:transition-none motion-reduce:hover:transform-none">
        <img className="w-6 h-6 mb-1" src="/chimenea-de-la-casa.png" alt="Inicio" />
        <span className="text-xs">Inicio</span>
    </button>
    <button className="flex flex-col items-center text-gray-300 transition transform hover:-translate-y-11 motion-reduce:transition-none motion-reduce:hover:transform-none">
        <img className="w-6 h-6 mb-1" src="/usuario.png" alt="Mi perfil" />
        <span className="text-xs">Mi perfil</span>
    </button>
    <button className="flex flex-col items-center text-gray-300 transition transform hover:-translate-y-11 motion-reduce:transition-none motion-reduce:hover:transform-none">
        <img className="w-6 h-6 mb-1" src="/grafico-mixto.png" alt="Mi Actividad" />
        <span className="text-xs">Mi Actividad</span>
    </button>
</div>

=======
      <body className={`${inter.className} flex flex-col-reverse lg:flex lg:flex-row`}>
        <Navbar/>
        {children}

      </body>
>>>>>>> 7cc2b2aa275142b7c703138c8060d94a4ee46c95
    </html>
  );
}
