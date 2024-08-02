import Image from "next/image";
import { Doctor } from "./agendarTurno";
import usePreventParentScroll from "./usePreventParentScroll";

interface ProfRadioCardProps {
  professionals: Doctor[];
  selectedProfessional: string | number | undefined;
  onProfessionalSelect: (value: string | number) => void;
}

const ProfRadioCard: React.FC<ProfRadioCardProps> = ({
  professionals,
  selectedProfessional,
  onProfessionalSelect,
}) => {
  console.log("Profesional seleccionado: ", selectedProfessional);
  const scrollRef = usePreventParentScroll();
  return (
    <div className="profesionales-disponibles mb-4 rounded-xl shadow-xl bg-white">
      <h2 className="text-xl font-semibold mb-5 ml-2">
        Available Professionals
      </h2>
      <div
        className="w-full flex flex-col gap-2 max-h-40 overflow-y-auto scrollbar-hide scrollbar-custom "
        ref={scrollRef}
      >
        {professionals.map((professional) => (
          <label
            key={professional._id}
            className="w-full max-h-[5rem] flex justify-between items-center gap-4 p-2 border border-gray-300 rounded-xl shadow-xl bg-white cursor-pointer"
            htmlFor={`professional-${professional._id}`}
          >
            <div className="flex w-full justify-between">
              <div className="contenedorimagen pl-3 flex gap-3 w-full justify-center">
                <Image
                  src={professional.photo}
                  alt={`${professional.firstName} ${professional.lastName}`}
                  width={40}
                  height={40}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div className="title-container w-[200px]">
                      <span className="font-semibold block text-sm">
                        {professional.firstName} {professional.lastName}
                      </span>
                      <span className="text-xs text-gray-600">
                        {professional.speciality}
                      </span>
                      <div className="flex">
                        <Image
                          src="/assets/agenda/estrellas.png"
                          width={71}
                          height={13}
                          alt="estrellas"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-50% flex justify-end mr-5">
              <input
                type="radio"
                name="professional"
                value={professional._id}
                id={`professional-${professional._id}`}
                checked={selectedProfessional === professional._id}
                onChange={() => onProfessionalSelect(professional._id)}
                className="form-radio w-full"
                aria-labelledby={`professional-${professional._id}`}
              />
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ProfRadioCard;
