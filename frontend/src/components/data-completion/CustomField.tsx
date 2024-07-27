import Input from "../Input";

// Deberia hacer un custom field con un switch y luego hacer otro
// componente para luego renderizarlos segun sea el caso

interface customFieldI {
  labelTitle: string;
  selectField?: string;
  checkbox?: boolean;
}

const CustomField = ({ labelTitle, checkbox, selectField }: customFieldI) => {
  return (
    <div>
      <label htmlFor="">{labelTitle}</label>
      {/* If checkbox exist */}

      <Input twClass="w-[53px]" type="string" name={labelTitle.toLowerCase()} />
      <select name="" id="">
        <option value="">Centimetros</option>
      </select>
    </div>
  );
};

export default CustomField;
