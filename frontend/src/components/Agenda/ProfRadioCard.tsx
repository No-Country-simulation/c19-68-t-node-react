import React from "react";

interface Professional {
  name: string;
  rating: number;
  specialty: string;
  imageUrl: string;
}

interface ProfRadioCardProps {
  professionals: Professional[];
  selectedProfessional: string;
  onProfessionalSelect: (value: string) => void;
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
            key={index}
            className="flex items-center gap-4 p-4 border border-gray-300 rounded-md cursor-pointer"
          >
            <img
              src={professional.imageUrl}
              alt={professional.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <span className="font-semibold block">
                    {professional.name}
                  </span>
                  <span className="text-sm text-gray-600">
                    {professional.specialty}
                  </span>
                  <div className="flex gap-1">
                    {Array.from({ length: professional.rating }, (_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <input
              type="radio"
              name="professional"
              value={professional.name}
              checked={selectedProfessional === professional.name}
              onChange={() => onProfessionalSelect(professional.name)}
              className="form-radio"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default ProfRadioCard;
