import Input from "@/components/Input";

const page = () => {
  return (
    <section className="w-screen h-screen">
      <div className="w-[375.83px] m-auto h-[100%]">
        <header className="w-[85%] h-[15%] m-auto flex items-center justify-between">
          <h2 className="font-bold text-[35.19px]">Historia Clinica</h2>
        </header>
        <main className="w-[360px] m-auto">
          <form className="flex flex-col gap-[23px] text-[13.2px]">
            <label>
              <span>Nombre y Apellido</span>
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
            <label className="flex justify-between items-end">
              <span>Ocupación</span>
              <Input twClass="w-[269.71px]" type="string" />
            </label>
            <label className="flex justify-between">
              <div className="flex">
                <span>ID</span>
                <select className="w-[96.78px] h-4" name="" id=""></select>
              </div>
              <div className="">
                <span>#</span>
                <Input twClass="w-[193.82px]" type="string" />
              </div>
            </label>
            <label>
              <span>Motivo de consulta</span>
              <Input twClass="w-[100%]" type="string" />
            </label>
            <label className="flex flex-col w-full">
              <span>Antecedentes personales patológicos</span>
              <div>
                <article className="inline-block pr-3 pt-[11px]">
                  <div className="flex items-center gap-1">
                    <span>Cardiovasculares</span>
                    <Input
                      type="radio"
                      twClass="w-4 h-4"
                      name="genre"
                      id="genre"
                    />
                  </div>
                </article>
                <article className="inline-block pr-3 pt-[11px]">
                  <div className="flex items-center gap-1">
                    <span>Quirurgicos</span>
                    <Input
                      type="radio"
                      twClass="w-4 h-4"
                      name="genre"
                      id="genre"
                    />
                  </div>
                </article>
                <article className="inline-block pr-3 pt-[11px]">
                  <div className="flex items-center gap-1">
                    <span>Pulmonares</span>
                    <Input
                      type="radio"
                      twClass="w-4 h-4"
                      name="genre"
                      id="genre"
                    />
                  </div>
                </article>
                <article className="inline-block pr-3 pt-[11px]">
                  <div className="flex items-center gap-1">
                    <span>Diabetes</span>
                    <Input
                      type="radio"
                      twClass="w-4 h-4"
                      name="genre"
                      id="genre"
                    />
                  </div>
                </article>
                <article className="inline-block pr-3 pt-[11px]">
                  <div className="flex items-center gap-1">
                    <span>Digestivos</span>
                    <Input
                      type="radio"
                      twClass="w-4 h-4"
                      name="genre"
                      id="genre"
                    />
                  </div>
                </article>
                <article className="inline-block pr-3 pt-[11px]">
                  <div className="flex items-center gap-1">
                    <span>Alérgicos</span>
                    <Input
                      type="radio"
                      twClass="w-4 h-4"
                      name="genre"
                      id="genre"
                    />
                  </div>
                </article>
                <article className="inline-block pr-3 pt-[11px]">
                  <div className="flex items-center gap-1">
                    <span>Renales</span>
                    <Input
                      type="radio"
                      twClass="w-4 h-4"
                      name="genre"
                      id="genre"
                    />
                  </div>
                </article>
                <article className="inline-block pr-3 pt-[11px]">
                  <div className="flex items-center gap-1">
                    <span>Transfusiones</span>
                    <Input
                      type="radio"
                      twClass="w-4 h-4"
                      name="genre"
                      id="genre"
                    />
                  </div>
                </article>
                <article className="inline-block pr-3 pt-[11px]">
                  <div className="flex items-center gap-1">
                    <span>Inmunodeficiencias</span>
                    <Input
                      type="radio"
                      twClass="w-4 h-4"
                      name="genre"
                      id="genre"
                    />
                  </div>
                </article>
              </div>
            </label>
            <label>
              <span>Medicamentos</span>
              <Input twClass="w-[100%]" type="string" />
            </label>
            <label>
              <span>Especifique</span>
              <Input twClass="w-[100%]" type="string" />
            </label>
            <label className="flex flex-col gap-[5px]">
              <span>Antecedentes personales No patológicos</span>
              <article className="inline-block">
                <div className="flex items-center gap-4">
                  <span>Fuma?</span>
                  <div className="flex items-center gap-1">
                    <span>Sí</span>
                    <Input
                      type="radio"
                      twClass="w-4 h-4"
                      name="genre"
                      id="genre"
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <span>No</span>
                    <Input
                      type="radio"
                      twClass="w-4 h-4"
                      name="genre"
                      id="genre"
                    />
                  </div>
                </div>
              </article>
              <article className="inline-block pr-3 pt-[11px]">
                <div className="flex items-center gap-4">
                  <span>Toma Alcohol?</span>
                  <div className="flex items-center gap-1">
                    <span>Sí</span>
                    <Input
                      type="radio"
                      twClass="w-4 h-4"
                      name="genre"
                      id="genre"
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <span>No</span>
                    <Input
                      type="radio"
                      twClass="w-4 h-4"
                      name="genre"
                      id="genre"
                    />
                  </div>
                </div>
              </article>
              <article className="inline-block pr-3 pt-[11px]">
                <div className="flex items-center gap-4">
                  <span>Usa sustancias psicoactivas?</span>
                  <div className="flex items-center gap-1">
                    <span>Sí</span>
                    <Input
                      type="radio"
                      twClass="w-4 h-4"
                      name="genre"
                      id="genre"
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <span>No</span>
                    <Input
                      type="radio"
                      twClass="w-4 h-4"
                      name="genre"
                      id="genre"
                    />
                  </div>
                </div>
              </article>
              <article className="flex pt-3">
                <span>Otro:</span>
                <Input
                  type="text"
                  twClass="w-[337.89px]"
                  name="genre"
                  id="genre"
                />
              </article>
            </label>
            <label>
              <h3>Antecedentes Familiares</h3>

              <div className="flex flex-col gap-[17px]">
                <article>
                  <span>Enfermedades</span>
                  <Input twClass="w-[100%]" type="string" />
                </article>
                <article>
                  <span>Cantidad de hermanos</span>
                  <Input twClass="w-[100%]" type="string" />
                </article>
                <article>
                  <span>Enfermedades que padece:</span>
                  <Input twClass="w-[100%]" type="string" />
                </article>
                <article className="flex gap-4">
                  <span>¿Convive con más personas?</span>
                  <div className="flex items-center gap-1">
                    <span>Sí</span>
                    <Input twClass="w-4 h-4" type="radio" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span>No</span>
                    <Input twClass="w-4 h-4" type="radio" />
                  </div>
                </article>
              </div>
            </label>
            <label className="flex flex-col gap-4">
              <span>Antecedentes Gineco-Obstétrico:</span>
              <div className="flex gap-[11px]">
                <article className="flex items-end">
                  <span>Menarquia</span>

                  <Input twClass="w-[66.53px]" type="string" />
                </article>
                <article className="flex items-end">
                  <span>Ritmo</span>

                  <Input twClass="w-[66.53px]" type="string" />
                </article>
                <article className="flex items-end">
                  <span>F.U.M</span>

                  <Input twClass="w-[66.53px]" type="string" />
                </article>
              </div>
              <article className="flex gap-4">
                <span>Usa métodos anticonceptivos</span>
                <div className="flex items-center gap-1">
                  <span>Sí</span>
                  <Input twClass="w-4 h-4" type="radio" />
                </div>
                <div className="flex items-center gap-1">
                  <span>No</span>
                  <Input twClass="w-4 h-4" type="radio" />
                </div>
              </article>
              <article className="flex items-end">
                <span>Cuales:</span>

                <Input twClass="w-[320.29px]" type="string" />
              </article>
            </label>
            <label className="flex flex-col">
              <span>Enfermedad actual del paciente</span>
              <Input twClass="w-full" type="string" />
            </label>
            <label>
              <span>Exploración física del paciente</span>
              <div className="flex flex-wrap gap-y-4 justify-between">
                <span className="flex items-end">Signos vitales</span>
                <article className="flex items-end">
                  <p>
                    T.A. <span className="text-[6.6px]">(Brazo Derecho)</span>
                  </p>
                  <Input twClass="w-[50.36px]" type="string" />
                </article>
                <article className="flex items-end">
                  <p>
                    T.A. <span className="text-[6.6px]">(Brazo Izquierdo)</span>
                  </p>
                  <Input twClass="w-[50.38px]" type="string" />
                </article>
                <article className="flex items-end">
                  <span>F.C.</span>
                  <Input twClass="w-[56.36px]" type="string" />
                </article>
                <article className="flex items-end">
                  <span>Frec Resp.</span>
                  <Input twClass="w-[56.36px]" type="string" />
                </article>
                <article className="flex items-end">
                  <span>Temp</span>
                  <Input twClass="w-[113.82px]" type="string" />
                </article>
                <article className="flex items-end">
                  <span>Peso</span>
                  <Input twClass="w-[87.15px]" type="string" />
                </article>
                <article className="flex items-end">
                  <span>Talla</span>
                  <Input twClass="w-[94.86px]" type="string" />
                </article>
                <article className="flex items-end">
                  <span>IMC</span>
                  <Input twClass="w-[72.58px]" type="string" />
                </article>
                <article className="flex items-end">
                  <span>Cabeza y Cuello</span>
                  <Input twClass="w-[258px]" type="string" />
                </article>
                <article className="flex items-end">
                  <span>Tórax</span>
                  <Input twClass="w-[325px]" type="string" />
                </article>
                <article className="flex items-end">
                  <span>Abdomen</span>
                  <Input twClass="w-[300px]" type="string" />
                </article>
                <article className="flex items-end">
                  <span>Extremidades</span>
                  <Input twClass="w-[275px]" type="string" />
                </article>
                <article className="flex items-end">
                  <span>Neurológico y estado mental</span>
                  <Input twClass="w-[180px]" type="string" />
                </article>
              </div>
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
