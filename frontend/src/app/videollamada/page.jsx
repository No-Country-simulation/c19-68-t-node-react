import Head from 'next/head';
import dynamic from 'next/dynamic';
import "./page.module.css";

const JitsiMeet = dynamic(() => import('@/components/JitsiMeet'), { ssr: false });

export default function Home() {
  return (
    <section className="w-screen h-screen">
      <div className="w-[375.83px] m-auto h-[932PX]">
      <header className="flex items-center justify-between mb-5 relative w-full">
                    <div className="flex items-center space-x-4 w-[180px] gradient">
                        <div className="w-10 h-10 bg-[#89BAD8] rounded-full flex items-center justify-center">
                            <img className="w-6 h-6" src="/home/lets-icons_user-light.png" alt="Avatar" width={24} height={24} />
                        </div>
                        <span className="font-semibold">Pepito Perez</span>
                    </div>
                    <div className="absolute top-0 right-0 p-2">
                        <img className="w-6 h-6" src="/logo.png" alt="Logo" />
                    </div>
                </header>
        <main className="w-[360px] m-auto">
          <JitsiMeet />
        </main>
      </div>
    </section>

  );
}