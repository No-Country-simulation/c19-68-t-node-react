"use client";

import Input from "@/components/Input";

const page = () => {
  return (
    <section className="w-screen h-screen bg-[#FAFAFA]">
      <div className="w-[100%] h-[100%]">
        <header className="w-[85%] h-[15%] m-auto flex items-center justify-between">
          <div className="flex items-center w-[191px] border-solid border-b-[3px] pb-[5px] gap-[13px]">
            <img
              className="rounded-full w-14 h-14"
              src="https://media.istockphoto.com/id/1337144146/es/vector/vector-de-icono-de-perfil-de-avatar-predeterminado.jpg?s=612x612&w=0&k=20&c=YiNB64vwYQnKqp-bWd5mB_9QARD3tSpIosg-3kuQ_CI="
              alt=""
            />
            <h2 className="font-bold text-[20px]">Editar Perfil</h2>
          </div>
          <p className=" text-[33.35px]">X</p>
        </header>
        <main className="w-[75%] m-auto">
          <div className="flex flex-col items-center justify-center">
            <img
              className="rounded-full w-[130px] h-[130px]"
              src="https://media.istockphoto.com/id/1337144146/es/vector/vector-de-icono-de-perfil-de-avatar-predeterminado.jpg?s=612x612&w=0&k=20&c=YiNB64vwYQnKqp-bWd5mB_9QARD3tSpIosg-3kuQ_CI="
              alt=""
            />

            <input
              className="w-[130.3px]"
              type="file"
              id="file"
              name="file"
              multiple
            />
          </div>
          <form className="flex flex-col pt-[83px] gap-[26px] text-[12px]">
            <label className="flex gap-1 items-center">
              <span> Fecha de Nacimiento</span>
              <Input twClass="w-[94px]" type="date" />
              <span>Edad</span>
              <Input twClass="w-[53px]" type="string" />
            </label>

            <label className="flex justify-between">
              <span>ID</span>
              <Input twClass="w-[89px]" type="string" />
              <span>Número</span>
              <Input twClass="w-[145px]" type="string" />
            </label>
            <label>
              <span>Email</span>
              <Input twClass="w-[273px]" type="string" />
            </label>
            <label>
              <span>Direccion</span>
              <Input twClass="w-[246px]" type="number" />
            </label>
            <label>
              <span>Pais</span>
              <Input twClass="w-[119px]" type="string" />
              <span>Cod Postal</span>
              <Input twClass="w-[93px]" type="string" />
            </label>
            <label>
              <span>Telefono</span>
              <br />
              <Input twClass="w-[126px]" type="number" />
              <span>Nacionalidad</span>
              <Input twClass="w-[105px]" type="number" />
            </label>

            <button className="w-[70%] text-white rounded-lg bg-[#812B75] py-3 m-auto my-4">
              Guardar
            </button>
          </form>
        </main>
      </div>
    </section>
  );
};

export default page;
