// components/Modal.tsx

import AuthHeader from "./ui/authHeader";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CompleteDataModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-500 bg-opacity-30 transition-opacity duration-1000">
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
        </div>
      </div>
    </div>
  );
};

export default CompleteDataModal;
