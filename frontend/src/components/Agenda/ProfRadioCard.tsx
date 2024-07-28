import Image from "next/image";

interface Professional {
  _id: string | number;
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
  availability: [endDate: string, startDate: string];
}

interface ProfRadioCardProps {
  professionals: Professional[];
  selectedProfessional: string | number | undefined;
  onProfessionalSelect: (value: string | number) => void;
}

const ProfRadioCard: React.FC<ProfRadioCardProps> = ({
  professionals,
  selectedProfessional,
  onProfessionalSelect,
}) => {
  console.log("El profesional: ", professionals);

  return (
    <div className="profesionales-disponibles mb-4">
      <h2 className="text-xl font-semibold mb-2">Profesionales Disponibles</h2>
      <div className="flex flex-col gap-2">
        {professionals.map((professional) => (
          <label
            key={professional._id}
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
              value={professional._id}
              checked={selectedProfessional === professional._id}
              onChange={() => onProfessionalSelect(professional._id)}
              className="form-radio w-full"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default ProfRadioCard;
