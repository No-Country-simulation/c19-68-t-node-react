"use client";

import PhoneNumberInput from "@/components/authentication/ui/authPhoneField";
import DayCheckbox from "@/components/data-completion/DayCheckbox";
import Input from "@/components/Input";
import SectionTitle from "@/components/ui/sectionTitle";
import Image from "next/image";
import { useState, useEffect, use } from "react";
import TimeSelect from "./TimeSelect";
import ConsultationValue from "./ConsultationValue";
import useSWR from "swr";
import { fetcher } from "@/utils/lib/fetcher";
import { doctorCompleteData } from "./actions";
import "./page.css";
import { redirect } from "next/navigation";

const DataCompletionDoctor = ({ doctorId }: { doctorId: string }) => {
  const URL = `https://e-medicine-backend.vercel.app/doctors/getDoc/${doctorId}/`;

  const [phone, setPhone] = useState<string>("");

  const [country, setCountry] = useState<string>("");
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [timeSlots, setTimeSlots] = useState({
    morningSlot: { start: "08:00", end: "12:00" },
    afternoonSlot: { start: "13:00", end: "17:00" },
  });

  const dayMap: { [key: string]: string } = {
    Mon: "Monday",
    Tue: "Tuesday",
    Wed: "Wednesday",
    Thu: "Thursday",
    Fri: "Friday",
    Sat: "Saturday",
    Sun: "Sunday",
  };

  const handleDayChange = (day: string, checked: boolean) => {
    const fullDay = dayMap[day];
    if (checked) {
      setSelectedDays((prev) => [...prev, fullDay]);
    } else {
      setSelectedDays((prev) => prev.filter((d) => d !== fullDay));
    }
  };

  const handleTimeChange = (
    slot: "morningSlot" | "afternoonSlot",
    timeType: "start" | "end",
    time: string
  ) => {
    setTimeSlots((prev) => ({
      ...prev,
      [slot]: {
        ...prev[slot],
        [timeType]: time,
      },
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = {
      phone,
      country,
      availability: {
        daysOfWeek: selectedDays,
        timeSlots: {
          morningSlot: timeSlots.morningSlot,
          afternoonSlot: timeSlots.afternoonSlot,
        },
      },
      // consultValue
    };
    console.log("La data a enviar: ", formData);

    const result = await doctorCompleteData(formData, doctorId);
    if (result.success) {
      redirect(`/doctor/${doctorId}`);
    } else {
      console.error("Error al enviar los datos");
    }
  };

  const { data, error, isLoading } = useSWR(URL, fetcher);

  useEffect(() => {
    if (data) {
      setPhone(data.doctor.phone);
      setCountry(data.doctor.country);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center p-4 md:p-8 lg:w-full lg:grid lg:grid-cols-2">
      {/* Header */}
      <SectionTitle title="Configurar datos de atención" />

      {/* Profile Picture */}
      <div className="w-full py-10 z-10 flex flex-col items-center lg:grid grid__profile">
        <div className="w-[122px] h-[122px] mt-9 bg-[#89BAD8] rounded-full flex items-center justify-center mb-2 lg:mb-0 lg:justify-self-center">
          <Image
            src="/lapiz-de-usuario.png"
            alt="Edit Photo"
            width={70}
            height={70}
            className="ml-4"
          />
        </div>
      </div>

      {/* Form */}
      <form
        className="flex flex-col gap-[26px] text-[12px] max-w-[325px]"
        onSubmit={handleSubmit}
      >
        {/* ID y Número */}
        <div className="id-number-container flex w-full justify-between">
          {/* ID */}
          <div className="flex flex-col w-screen">
            <div className="flex"></div>
            <label htmlFor="" className="text-base">
              <div className="flex items-center">
                <Image
                  src="/assets/data-completion/identificaiton-icon.png"
                  width={28}
                  height={28}
                  alt="identification-icon"
                />
                <span>ID</span>
              </div>

              <select className="border-b border-solid pt-1 bg-transparent w-[126px] border-[#35799F] px-2">
                <option value="Pasaporte">Pasaporte</option>
                <option selected value="DNI">
                  DNI
                </option>
              </select>
            </label>
          </div>
          {/* Número */}
          <label className="flex flex-col justify-between w-[100%]">
            <div className="flex items-center gap-1">
              <span className="text-xl">#</span>
              <span>Número</span>
            </div>

            <Input type="input" name="numero" />
          </label>
        </div>
        {/* PAÍS Y TELÉFONO */}
        <div className="flex items-center gap-2">
          {/* PAÍS */}
          <div>
            <div className="flex items-center gap-1">
              <Image
                src="/assets/signup/world-form-icon.png"
                width={24}
                height={24}
                alt="world icon"
              />
              <label>País</label>
            </div>
            <input
              className="border-b border-solid pt-1 bg-transparent border-[#35799F] px-2"
              type="text"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          {/* TELÉFONO */}
          <PhoneNumberInput value={phone} onChange={setPhone} name="phone" />
        </div>

        {/* Horario de atención */}
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/assets/data-completion/reloj-icon.png"
              width={21}
              height={21}
              alt="reloj-icon"
            />
            <label htmlFor="">Horario de atención</label>
          </div>
          {/* Contenedor de franja horaria */}
          <div className="flex flex-col gap-2">
            {/* Primera franja horaria */}
            <div className="flex justify-between">
              <TimeSelect
                title="Desde"
                timeType="start"
                onChange={(timeType, value) =>
                  handleTimeChange(
                    "morningSlot",
                    timeType as "start" | "end",
                    value
                  )
                }
              />
              <TimeSelect
                title="Hasta"
                timeType="end"
                onChange={(timeType, value) =>
                  handleTimeChange(
                    "morningSlot",
                    timeType as "start" | "end",
                    value
                  )
                }
              />
            </div>
            {/* Segunda franja horaria */}
            <div className="flex justify-between">
              <TimeSelect
                title="Desde"
                timeType="start"
                onChange={(timeType, value) =>
                  handleTimeChange(
                    "afternoonSlot",
                    timeType as "start" | "end",
                    value
                  )
                }
              />
              <TimeSelect
                title="Hasta"
                timeType="end"
                onChange={(timeType, value) =>
                  handleTimeChange(
                    "afternoonSlot",
                    timeType as "start" | "end",
                    value
                  )
                }
              />
            </div>
          </div>
        </div>

        {/* Días hábiles */}
        <div>
          <div className="flex items-center gap-1">
            <Image
              src="/assets/data-completion/dia-habil-icon.png"
              width={22}
              height={22}
              alt="reloj-icon"
            />
            <label htmlFor="">Días Hábiles</label>
          </div>
          {/* Sección de selección de días */}
          <div className="w-full flex gap-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <DayCheckbox key={day} day={day} onChange={handleDayChange} />
            ))}
          </div>
        </div>

        {/* Valor de la consulta */}
        <div className="flex gap-3">
          <ConsultationValue
            imageSrc="/assets/data-completion/billete.png"
            altText="reloj-icon"
            label="Valor de la consulta"
            options={["28 USD", "29 USD", "30 USD", "31 USD"]}
          />
        </div>

        <button
          className="w-[70%] text-white rounded-lg bg-[#812B75] py-3 m-auto my-4"
          type="submit"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default DataCompletionDoctor;
