import Image from "next/image";
interface ConsultationValueProps {
  imageSrc: string;
  altText: string;
  label: string;
  options: string[];
}

const ConsultationValue: React.FC<ConsultationValueProps> = ({
  imageSrc,
  altText,
  label,
  options,
}) => {
  return (
    <div className="flex gap-3 items-center">
      <Image src={imageSrc} width={22} height={22} alt={altText} />
      <label>{label}</label>
      <select name="consultValue">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ConsultationValue;
