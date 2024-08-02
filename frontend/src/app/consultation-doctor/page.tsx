import Input from "@/components/Input";
import "./page.css";

const page = () => {
    return (
        <section className="w-screen h-screen">
            <div className="w-[375.83px] m-auto h-[100%]">
                <header className="w-[150px] mt-6 mb-20  h-[50px] flex items-end gap-1 gradient">
                    <img src={"/logo.png"} width={23} height={19} alt="logo"/>
                    <h2 className="font-bold text-[20px]">Consulta</h2>
                </header>
                <main className="w-[360px] m-auto">
                    <form className="flex flex-col gap-4 text-[13.2px]">
                        <label>
                            <span>Nombres y apellidos del paciente</span>
                            <Input twClass="w-[100%]" type="string" />
                        </label>
                        <label className="flex items-center gap-4">
                            <img src="/venus-marte.png" alt="sexo" className="w-6 h-6" />
                            <span>Sexo</span>
                            <div className="flex items-center gap-2">
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="genre"
                                        value="male"
                                        className="custom-radio"
                                    />
                                    <span className="custom-radio-span">Masculino</span>
                                </label>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="genre"
                                        value="female"
                                        className="custom-radio"
                                    />
                                    <span className="custom-radio-span">Femenino</span>
                                </label>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="genre"
                                        value="other"
                                        className="custom-radio"
                                    />
                                    <span className="custom-radio-span">Otro</span>
                                </label>
                            </div>
                        </label>
                        <label className="flex items-center gap-[23px]">
                            <div>
                                <span>Fecha de Nacimiento</span>
                                <Input twClass="w-[120px]" type="date" />
                            </div>
                            <div>
                                <span>Edad</span>
                                <Input twClass="w-[53.17px]" type="string" />
                            </div>
                        </label>
                        <label className="flex justify-between">
                            <div className="w-[30%] flex items-center gap-3">
                                <img className="w-[24px] h-[24px]" src="material-symbols-light_id-card-outline.png" alt="id" />
                                <span>ID</span>
                                <Input twClass="w-[100%]" type="string" />
                            </div>
                            <div className="w-[60%] flex justify-between">
                                <span>#Nro</span>
                                <Input twClass="w-[100%]" type="string" />
                            </div>
                        </label>
                        <label>
                            <div className="w-[100%] flex items-center gap-3">
                                <img className="w-[24px] h-[24px]" src="/fluent_document-heart-pulse-20-regular.png" alt="tratamiento" />
                                <span>Epecialidad</span>
                                <Input twClass="w-[100%]" type="string" />
                            </div>
                        </label>
                        <div className="flex flex-col justify-between">
                            <div className="flex gap-3">
                                <img className="w-[27px] h-[27px]" src="/Vector.png" alt="Motivo" />
                                <label form="motivo" className="mr-2 mb-[14px]">Motivo de la consulta</label>
                            </div>
                            <div className="bg-gray-200 rounded-lg p-10 flex items-center w-100%">
                                <input type="text" id="motivo" placeholder="Ingrese el motivo aquí..." className="bg-transparent outline-none w-full text-gray-700"></input>
                            </div>
                        </div>
                        <label>
                            <div className="w-[100%] flex items-center gap-3">
                                <img className="w-[27px] h-[27px]" src="/Vector.png" alt="tratamiento" />
                                <span>Diagnostico</span>
                                <Input twClass="w-[100%]" type="string" />
                            </div>
                        </label>
                        <div className="flex flex-col justify-between">
                            <div className="flex gap-3">
                                <img className="w-[27px] h-[27px]" src="/fluent_document-signature-32-light.png" alt="Indicaciones" />
                                <label form="indicaciones" className="mr-2 mb-[14px]">Indicaciones medicas y conclución</label>
                            </div>
                            <div className="bg-gray-200 rounded-lg p-10 flex items-center w-100% ">
                                <input type="text" id="motivo" placeholder="Ingrese el motivo aquí..." className="bg-transparent outline-none w-full text-gray-700"></input>
                            </div>
                        </div>
                        <label>
                            <div className="w-[100%] flex items-center gap-1">
                                <img className="w-[24px] h-[24px]" src="/healthicons_doctor-outline.png" alt="medico" />
                                <span>Medico especialista</span>
                                <Input twClass="w-[55%]" type="string" />
                            </div>
                        </label>
                        <label className="flex justify-between">
                            <div className="w-[50%] flex items-center gap-3">
                                <span>Firma</span>
                                <Input twClass="w-[60%]" type="string" />
                            </div>
                            <div className="w-[50%] flex justify-between">
                                <span>Fecha y Hora</span>
                                <Input twClass="w-[50%]" type="string" />
                            </div>
                        </label>
                        <button className="w-[70%] rounded-lg bg-[#812B75] text-[#F2F2F2] font-bold py-3 m-auto my-4">
                            Guardar
                        </button>
                    </form>
                </main>
            </div>
        </section>
    );
};

export default page;