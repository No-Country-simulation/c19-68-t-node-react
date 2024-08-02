import Input from "@/components/Input";
import Image from "next/image";
import { redirect } from "next/navigation";

const page = ({ params }: { rol: string; id: string; params: any }) => {
 
  if (params.rol === 'paciente') {
    redirect(`/paciente/${params.id}`)
  }
  
  return (

      <section className="w-screen h-full h-min-[100vh]">
      <div className="w-[375.83px] m-auto h-[100%]">
        <header className="w-[200px] mt-6 mb-20  h-[50px] flex items-end gap-1 gradient">
          <Image src={"/logo.png"} width={23} height={19} alt="logo" />
          <h2 className="font-bold text-[20px]">Historia Clinica</h2>
        </header>
        <main className="w-[360px] m-auto">
          <form className="flex flex-col gap-[23px] text-[13.2px]">
            <label className="z-10">
              <div className="flex items-end">
                <Image
                  src={"/history-medical/user-icon.png"}
                  width={23}
                  height={19}
                  alt="logo"
                />
                <span>Nombre y Apellido</span>
                </div>
                <Input twClass="w-[100%]" type="string" />
                </label>
                <article className="flex justify-between z-10">
              <div className="flex items-end gap-1">
                <Image
                  src={"/venus-marte.png"}
                  width={23}
                  height={19}
                  alt="logo"
                  />
                  <span>Sexo</span>
                  </div>
              <label className="flex gap-x-1 items-center">
                <span>Masculino</span>
                <Input type="radio" twClass="radio" name="genre" id="genre" />
                </label>
                <label className="flex gap-x-1 items-center">
                <span>Femenino</span>
                <Input type="radio" twClass="radio" name="genre" id="genre" />
                </label>
                <label className="flex gap-x-1 items-center">
                <span>Otro</span>
                <Input type="radio" twClass="radio" name="genre" id="genre" />
                </label>
                </article>
                {/* Identificación */}
                <article className="flex justify-between z-10">
              <label className="flex">
                <div className="flex items-end gap-1">
                <Image
                  src={"/history-medical/id-icon.png"}
                  width={23}
                  height={19}
                  alt="logo"
                  />
                  <span>ID</span>
                </div>
                <Input twClass="w-[96.78px]" type="string" />
                </label>
                <label className="">
                <span># Nro</span>
                <Input twClass="w-[150px]" type="string" />
                </label>
                </article>
                {/* Ocupación */}
                <label className="flex justify-between items-end">
              <div className="flex items-end gap-1">
              <Image
                  src={"/history-medical/ocupation-icon.png"}
                  width={23}
                  height={19}
                  alt="logo"
                  />
                  <span>Ocupación</span>
                </div>
                <Input twClass="w-[269.71px]" type="string" />
                </label>
                {/* Motivo de consulta */}
                <label className="flex justify-between">
                <div className="flex items-end gap-1">
              <Image
                  src={"/history-medical/consult-icon.png"}
                  width={23}
                  height={19}
                  alt="logo"
                />
                <span>Motivo de consulta</span>
                </div>
                <Input twClass="w-[210px]" type="string" />
                </label>
                {/* Antecedentes personales */}
                <label className="flex flex-col w-full">
              <div className="flex items-end gap-1">
              <Image
                  src={"/history-medical/radiograph-icon.png"}
                  width={23}
                  height={19}
                  alt="logo"
                />
              <span>Antecedentes personales patológicos</span>
              </div>
              <div>
                <article className="inline-block pr-3 pt-[11px]">
                  <div className="flex items-center gap-1">
                    <span>Cardiovasculares</span>
                    <Input
                      type="radio"
                      twClass="radio"
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
                    twClass="radio"
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
                      twClass="radio"
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
                      twClass="radio"
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
                      twClass="radio"
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
                      twClass="radio"
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
                      twClass="radio"
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
                      twClass="radio"
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
                      twClass="radio"
                      name="genre"
                      id="genre"
                    />
                  </div>
                  </article>
              </div>
              </label>
            {/* Medicamentos */}
            <label className="flex justify-between">
              <div className="flex items-center gap-1">
              <Image
              src={"/history-medical/medicine-icon.png"}
              width={23}
              height={19}
              alt="logo"
              />
              <span>Medicamentos</span>
              </div>
              <Input twClass="w-[240px]" type="string" />
              </label>
              <article className="flex flex-col gap-[5px]">
              <div className="flex items-end gap-1">
              <Image
              src={"/history-medical/radiograph-icon.png"}
              width={23}
              height={19}
              alt="logo"
              />
              <span>Antecedentes personales No patológicos</span>
              </div>
              <article className="inline-block">
              <div className="flex items-center gap-4">
              <span>Fuma?</span>
              <label className="flex items-center gap-1">
                    <span>Sí</span>
                    <Input
                      type="radio"
                      twClass="radio"
                      name="genre"
                      id="genre"
                      />
                      </label>
                  <label className="flex items-center gap-1">
                    <span>No</span>
                    <Input
                      type="radio"
                      twClass="radio"
                      name="genre"
                      id="genre"
                      />
                  </label>
                  </div>
              </article>
              <article className="inline-block pr-3 pt-[11px]">
              <div className="flex items-center gap-4">
                  <span>Toma Alcohol?</span>
                  <label className="flex items-center gap-1">
                    <span>Sí</span>
                    <Input
                      type="radio"
                      twClass="radio"
                      name="genre"
                      id="genre"
                      />
                      </label>
                      <label className="flex items-center gap-1">
                      <span>No</span>
                    <Input
                    type="radio"
                      twClass="radio"
                      name="genre"
                      id="genre"
                    />
                  </label>
                </div>
              </article>
              <article className="inline-block pr-3 pt-[11px]">
              <div className="flex items-center gap-4">
              <span>Usa sustancias psicoactivas?</span>
                  <label className="flex items-center gap-1">
                    <span>Sí</span>
                    <Input
                      type="radio"
                      twClass="radio"
                      name="genre"
                      id="genre"
                      />
                      </label>
                      <label className="flex items-center gap-1">
                      <span>No</span>
                      <Input
                      type="radio"
                      twClass="radio"
                      name="genre"
                      id="genre"
                      />
                      </label>
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
            </article>
            <article>
              <div className="flex items-center gap-1">
              <Image
              src={"/history-medical/family-icon.png"}
                  width={23}
                  height={19}
                  alt="logo"
                  />
              <h3>Antecedentes Familiares</h3>
              </div>

              <div className="flex flex-col gap-[17px]">
                <label className="flex items-center">
                  <span>Enfermedades</span>
                  <Input twClass="w-[100%]" type="string" />
                </label>
                <article className="flex items-center justify-between gap-1">

                  <span>Hermanos</span>
                  <label className="flex items-center gap-1">
                  <span>Sí</span>
                  <Input twClass="radio" type="radio" />
                  </label>
                  <label className="flex items-center gap-1">
                  <span>No</span>
                  <Input twClass="radio" type="radio" />
                  </label>
                  <label>
                    <span>¿Cuantos?</span>
                    <Input twClass="w-[75px]" type="string" />
                  </label>
                </article>
                <label className="flex justify-between items-end">
                  <span>Enfermedades que padece:</span>
                  <Input twClass="w-[180px]" type="string" />
                </label>
                <article className="flex gap-4">
                  <span>¿Convive con más personas?</span>
                  <label className="flex items-center gap-1">
                    <span>Sí</span>
                    <Input twClass="radio" type="radio" />
                  </label>
                  <label className="flex items-center gap-1">
                    <span>No</span>
                    <Input twClass="radio" type="radio" />
                  </label>
                </article>
              </div>
            </article>
            <label className="flex flex-col gap-4">
              <div className="flex items-end gap-1">
              <Image
                  src={"/history-medical/radiograph-icon.png"}
                  width={23}
                  height={19}
                  alt="logo"
                />
                <span>Antecedentes Gineco-Obstétrico:</span>
                </div>
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
              <article className="flex justify-between gap-4">
                <span>¿Usa métodos anticonceptivos?</span>
                <div className="flex items-center gap-1">
                  <span>Sí</span>
                  <Input twClass="radio" type="radio" />
                </div>
                <div className="flex items-center gap-1">
                  <span>No</span>
                  <Input twClass="radio" type="radio" />
                </div>
              </article>
              <article className="flex items-end">
                <span>¿Cuales?</span>

                <Input twClass="w-[320.29px]" type="string" />
              </article>
            </label>
            <label className="flex flex-col">
              <div className="flex items-end gap-1">
              <Image
                  src={"/history-medical/radiograph-icon.png"}
                  width={23}
                  height={19}
                  alt="logo"
                />
              <span>Enfermedad actual del paciente</span>
              </div>
              <Input twClass="w-full" type="string" />
            </label>
            <label>
              <div className="flex items-center gap-1">
              <Image
                  src={"/history-medical/estetoscopio-icon.png"}
                  width={23}
                  height={19}
                  alt="logo"
                />
              <span>Exploración física del paciente</span>
              </div>
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
