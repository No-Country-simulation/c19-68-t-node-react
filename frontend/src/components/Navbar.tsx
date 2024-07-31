import Link from "next/link";
import "./Navbar.css";
import Image from "next/image";

import { getSession } from "@/utils/getSession";

interface Session {
  rol: string;
  id: string
}

const Navbar = async () => {
  const session: Session = (await getSession()) as Session;
  return (
    <nav className="navbar z-20 w-screen sticky bottom-0 left-0 right-0 bg-[#1E435B] text-white shadow-lg lg:top-0 lg:right-0 lg:flex-col lg:w-[100px] lg:h-screen lg:sticky">
      {/* Navbar Desktop */}

      <div className=" container hidden lg:flex lg:flex-col justify-between w-full h-full py-12">
        <header className="flex items-center justify-center gap-2 border-b-2 border-[#89BAD8] max-w-[160px] m-auto ">
          <Image
            src={"/icon-navbar.png"}
            alt="icon"
            width={23.55}
            height={19.27}
          />
          <h1 className="text-[22.23px] font-bold ">E-medicine</h1>
        </header>

        <main className="lg:h-[90%] flex w-[90%] m-auto lg:flex-col justify-evenly">
          <Link
            href={"/"}
            className="link flex border-b-[.25px] pb-[20px] justify-center items-center gap-1  text-gray-300"
          >
            <Image
              src={"/navbar/home.png"}
              alt="icon"
              width={14.52}
              height={16.39}
            />
            <span className="hidden lg:block text-xs">Inicio</span>
          </Link>
          <Link
            href={"/paciente/agendar-turnos"}
            className="link flex border-b-[.25px] pb-[20px] justify-center items-center gap-1  text-gray-300"
          >
            <Image
              src={"/navbar/calendar_clock.png"}
              alt="icon"
              width={19.39}
              height={20.26}
            />
            <span className="hidden lg:block text-xs">Agenda</span>
          </Link>
          <Link
            href={"/editProfile"}
            className="link flex border-b-[.25px] pb-[20px] justify-center items-center gap-1  text-white"
          >
            <Image
              src={"/navbar/perfil.png"}
              alt="icon"
              width={18.85}
              height={18.85}
            />
            <span className="hidden lg:block text-xs">Mi Perfil</span>
          </Link>
          <Link
            href={"/program-date"}
            className="link flex items-center border-b-[.25px] pb-[20px] justify-center gap-1 text-gray-300"
          >
            <Image
              src={"/navbar/actividad.png"}
              alt="icon"
              width={20.65}
              height={19.58}
            />
            <span className="hidden lg:block text-xs">Actividad</span>
          </Link>
          <Link
            href={"/settings"}
            className="link flex  items-center border-b-[.25px] pb-[20px] justify-center gap-1 text-gray-300"
          >
            <Image
              src={"/navbar/settings.png"}
              alt="icon"
              width={18.65}
              height={20.31}
            />
            <span className="hidden lg:block text-xs">Configuración</span>
          </Link>
        </main>
        <footer className=" w-full flex items-center justify-evenly">
          <div className="flex gap-2  ">
            <Image
              src={"/doctor-profile.png"}
              alt="profile"
              width={60}
              height={60}
            />
            <ul className="text__doctor flex flex-col justify-center">
              <li className="text-[18px]">John Doe</li>
              <li className="text-[13px]">Ortopedia</li>
            </ul>
          </div>
          <Image
            src={"/logout.png"}
            alt="profile"
            width={23.33}
            height={23.33}
            className="text__doctor"
          />
        </footer>
      </div>
      {/* Navbar Mobile */}
      <div className="container m-auto h-[77px] flex justify-between w-full p-4 lg:hidden">
        <main className="lg:h-[90%] flex lg:flex-col lg:justify-evenly justify-between w-full">
          <Link
            href={`/${session?.rol}/${session?.id}/settings`}
            className="link flex justify-center items-center gap-1  text-gray-300"
          >
            <Image
              src={"/navbar/settings.png"}
              alt="icon"
              width={27}
              height={27}
            />
            <span className=" text-xs">Configuración</span>
          </Link>
          <Link
            href={`/${session?.rol}/${session?.id}/agendar-turnos`}
            className="link flex justify-center items-center gap-1  text-gray-300"
          >
            <Image
              src={"/navbar/calendar_clock.png"}
              alt="icon"
              width={19.39}
              height={20.26}
            />
            <span className="hidden lg:block text-xs">Agenda</span>
          </Link>
          <Link
            href={`/${session?.rol}/${session?.id}`}
            className="link flex justify-center items-center gap-1  text-white"
          >
            <Image
              src={"/navbar/home.png"}
              alt="icon"
              width={14.52}
              height={16.39}
            />
            <span className="hidden lg:block text-xs">Inicio</span>
          </Link>
          <Link
            href={`/${session?.rol}/${session?.id}/profile`}
            className="link flex items-center justify-center gap-1 text-gray-300"
          >
            <Image
              src={"/navbar/perfil.png"}
              alt="icon"
              width={18.85}
              height={18.85}
            />
            <span className="hidden lg:block text-xs">Mi perfil</span>
          </Link>
          <Link
            href={`/${session?.rol}/${session?.id}/actividad`}
            className="link flex  items-center justify-center gap-1 text-gray-300"
          >
            <Image
              src={"/navbar/actividad.png"}
              alt="icon"
              width={24}
              height={24}
            />
            <span className="hidden lg:block text-xs">Mi Actividad</span>
          </Link>
        </main>
      </div>
    </nav>
  );
};

export default Navbar;
