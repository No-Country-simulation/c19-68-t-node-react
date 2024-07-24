import Input from "@/components/Input";

const page = () => {
  return (
    <section className="w-screen h-screen">
      <div className="w-[100%] h-[100%]">
        <header className="w-[85%] h-[15%] m-auto flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="rounded-full w-14 h-14"
              src="https://media.istockphoto.com/id/1337144146/es/vector/vector-de-icono-de-perfil-de-avatar-predeterminado.jpg?s=612x612&w=0&k=20&c=YiNB64vwYQnKqp-bWd5mB_9QARD3tSpIosg-3kuQ_CI="
              alt=""
            />
            <h2 className="font-bold text-[17.6px]">Editar Perfil</h2>
          </div>
          <p className="font-bold">X</p>
        </header>
        <main className="w-[360px] m-auto">
          <form className="flex flex-col gap-4 text-[13.2px]">
            <label>
              <span>Paciente</span>
              <Input twClass="w-[100%]" type="string" />
            </label>
            <label className="flex justify-between">
              <span>Sexo</span>
              <article className="flex gap-x-1 items-center">
                <span>Masculino</span>
                <Input type="radio" twClass="w-4 h-4" name="genre" id="genre" />
              </article>
              <article className="flex gap-x-1 items-center">
                <span>Femenino</span>
                <Input type="radio" twClass="w-4 h-4" name="genre" id="genre" />
              </article>
              <article className="flex gap-x-1 items-center">
                <span>Otro</span>
                <Input type="radio" twClass="w-4 h-4" name="genre" id="genre" />
              </article>
            </label>
            <label className="flex gap-[23px]">
              <div>
                <span>Edad</span>
                <Input twClass="w-[123.17px]" type="string" />
              </div>
              <div>
                <span>Fecha de Nacimiento</span>
                <Input twClass="w-[213.34px]" type="date" />
              </div>
            </label>
            <label className="flex justify-between">
              <div className="w-[18%] flex flex-col">
                <span>ID</span>
                <Input twClass="w-[100%]" type="string" />
              </div>
              <div className="w-[80%] flex flex-col">
                <span>#</span>
                <Input twClass="w-[100%]" type="string" />
              </div>
            </label>
            <label>
              <span>Dirección de correo</span>
              <Input twClass="w-[100%]" type="string" />
            </label>
            <label className="flex gap-[6px]">
              <div className="flex flex-col">
                <span>Pais</span>
                <Input twClass="w-[177.88px]" type="string" />
              </div>
              <div  className="flex flex-col">
                <span>Cod Postal</span>
                <Input twClass="w-[177.88px]" type="string" />
              </div>
            </label>
            <label>
              <span>Teléfono</span>
              <Input twClass="w-[100%]" type="number" />
            </label>
            <label>
              <span>Dirección</span>
              <Input twClass="w-[100%]" type="string" />
            </label>

            <button className="w-[70%] rounded-lg bg-gray-400 py-3 m-auto my-4">
              Guardar
            </button>
          </form>
        </main>
      </div>
    </section>
  );
};

export default page;