import Image from "next/image";

interface Professional {
  id: string | number;
  photo: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  password: string;
  professionalCertificates: string[];
  speciality: string;
  phone: string;
  country: string;
  attentionSchedule: {
    day: string;
    startTime: string;
    endTime: string;
  }[];
}

interface ProfRadioCardProps {
  professionals: Professional[];
  selectedProfessional: number;
  onProfessionalSelect: (value: number) => void;
}

const ProfRadioCard: React.FC<ProfRadioCardProps> = ({
  professionals,
  selectedProfessional,
  onProfessionalSelect,
}) => {
  return (
    <div className="profesionales-disponibles mb-4">
      <h2 className="text-xl font-semibold mb-2">Profesionales Disponibles</h2>
      <div className="flex flex-col gap-2">
        {professionals.map((professional, index) => (
          <label
            key={professional.id}
            className="flex items-center gap-4 p-4 border border-gray-300 rounded-md cursor-pointer"
          >
            <Image
              src={professional.photo}
              alt={professional.lastName}
              width={40}
              height={40}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <span className="font-semibold block">
                    {professional.firstName} {professional.lastName}
                  </span>
                  <span className="text-sm text-gray-600">
                    {professional.speciality}
                  </span>
                  <div className="flex gap-1">
                    {Array.from({ length: 4 }, (_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <input
              type="radio"
              name="professional"
              value={professional.id}
              checked={selectedProfessional === professional.id}
              onChange={() => onProfessionalSelect(Number(professional.id))}
              className="form-radio"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default ProfRadioCard;
