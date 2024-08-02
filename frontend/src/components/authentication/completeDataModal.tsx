import { useRouter } from "next/navigation";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  role: string;
  userId: string;
}

const CompleteDataModal: React.FC<ModalProps> = ({
  isOpen,
  role,
  onClose,
  userId,
}) => {
  const router = useRouter();
  if (!isOpen) return null;

  const handleOption = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userChoise = formData.get("option");
    console.log("Campo seleccionado: ", formData.get("option"));
    userChoise === "yes" ? onClose() : router.push(`/${role}/${userId}/`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-30 transition-opacity duration-1000">
      <div className="w-[100%] h-full bg-[#35799F] flex flex-col justify-center p-10">
        <div className="header-container text-center">
          <div className="text-center text-[#F2F2F2]">
            <div className="flex items-center justify-center">
              <img src="/logo.png" alt="E-medicine Logo" className="mx-3" />
              <h2 className="text-[1.8rem] font-bold">E-medicine</h2>
            </div>

            <div className="w-full h-[4px] mb-4 rounded-[200px] bg-gradient-to-r from-[#812B75] via-[#89BAD8] to-[#35799F]"></div>
          </div>

          <p className="text-[#F2F2F2] w-full text-balance px-20">
            Medicina integral en la comodidad de tu hogar
          </p>
        </div>
        <div className="flex flex-col justify-center items-center pt-10">
          <h2 className="w-full h-full text-white text-center text-2xl p-10 text-balance">
            Desea llenar sus datos medicos
          </h2>
          <form onSubmit={handleOption}>
            <div className="flex items-center space-x-4 pt-10">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="option"
                  value="maybe"
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="text-white">Quizá después</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="option"
                  value="yes"
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="text-white">Sí</span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full text-white mt-20 p-4 rounded-2xl flex justify-center bg-blue-950"
            >
              Continuar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompleteDataModal;
