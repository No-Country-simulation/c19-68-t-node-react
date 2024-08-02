"use client";
import { useRouter } from "next/navigation";
import { redireccionForzada } from "./redireccion";

const SuccessfulPaymentForm = ({ userId, userRol }) => {
  const router = useRouter();

  const handleRedirect = () => {
    // router.push("/");
  };

  return (
    <div className="login-container overflow-hidden w-[80%] h-full justify-center flex flex-col items-center bg-white px-4">
      {/* Contenedor del formulario */}
      <div className="login-form w-full max-w-[400px] bg-white rounded-lg shadow-lg p-6">
        <form onSubmit={handleRedirect} className="flex flex-col gap-4">
          {/* Mensaje de pago exitoso */}
          <div className="text-center text-xl font-bold text-green-600 mb-8">
            ¡Pago completado con éxito!
          </div>

          {/* Detalles del pago */}
          <div className="text-gray-700 mb-4">
            <p className="font-bold mb-5">Detalles del pago:</p>
            <div className="mb-4">
              <table className="min-w-full">
                <tbody>
                  <tr>
                    <td className="font-bold p-2">Nro de pedido:</td>
                    <td className="p-2">#12345</td>
                  </tr>
                  <tr>
                    <td className="font-bold p-2">Total pagado:</td>
                    <td className="p-2">$30.00 USD</td>
                  </tr>
                  <tr>
                    <td className="font-bold p-2">Producto:</td>
                    <td className="p-2">Consulta médica</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Agradecimiento y contacto */}
          <div className="text-gray-700 text-center">
            <p>
              Muchas gracias. Si tienes alguna pregunta, no dudes en
              contactarnos a través de nuestro servicio de atención al cliente.
            </p>
          </div>

          {/* Botón de redirección */}
          <button
            type="submit"
            className="bg-[#812B75] text-white py-2 rounded-lg hover:bg-gray-500 transition w-full mt-8"
          >
            Ir a la página principal
          </button>
        </form>
      </div>
    </div>
  );
};

export default SuccessfulPaymentForm;
