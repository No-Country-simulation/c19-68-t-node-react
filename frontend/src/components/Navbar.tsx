import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-blue-900 text-white shadow-lg flex justify-between px-6 py-2 md:hidden">
                <Link href={'/settings'} className="flex hover:scale-[.1] transition-all flex-col items-center text-gray-300">
                    <img className="w-6 h-6 mb-1" src="/llave-inglesa.png" alt="Configuración" />
                    <span className="text-xs">Configuración</span>
                </Link>
                <Link href={'/'} className="flex hover:scale-[.1] transition-all flex-col items-center text-gray-300">
                    <img className="w-6 h-6 mb-1" src="/calendario-reloj.png" alt="Agenda" />
                    <span className="text-xs">Agenda</span>
                </Link>
                <Link href={'/'} className="flex hover:scale-[.1] transition-all flex-col items-center text-white">
                    <img className="w-6 h-6 mb-1" src="/chimenea-de-la-casa.png" alt="Inicio" />
                    <span className="text-xs">Inicio</span>
                </Link>
                <Link href={'/editProfile'} className="flex hover:scale-[.1] transition-all flex-col items-center text-gray-300">
                    <img className="w-6 h-6 mb-1" src="/usuario.png" alt="Mi perfil" />
                    <span className="text-xs">Mi perfil</span>
                </Link>
                <Link href={'/program-date'} className="flex hover:scale-[.1] transition-all flex-col items-center text-gray-300">
                    <img className="w-6 h-6 mb-1" src="/grafico-mixto.png" alt="Mi Actividad" />
                    <span className="text-xs">Mi Actividad</span>
                </Link>
                
            </nav>
  )
}

export default Navbar