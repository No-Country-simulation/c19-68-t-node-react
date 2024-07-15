import React from 'react';

const SettingsPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 md:p-8">
            {/* Header */}
            <div className="flex items-center w-full justify-between mb-4">
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <img className="w-6 h-6" src="/llave-inglesa.png" alt="Settings Icon" />
                    </div>
                    <span className="font-semibold">Configuración</span>
                </div>
                <button className="text-gray-500">
                    <img className="w-6 h-6" src="/x.png" alt="Close Icon" />
                </button>
            </div>

            {/* Settings List and Logout Button */}
            <div className="w-full bg-white p-5 rounded-lg shadow flex-grow flex flex-col justify-between mb-10">
                <ul className="space-y-4 flex-grow">
                    <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Citas programadas</span>
                    </li>
                    <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Idioma</span>
                    </li>
                    <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Configuración de pagos</span>
                    </li>
                    <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Cambiar contraseña</span>
                    </li>
                    <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Ayuda y soporte</span>
                    </li>
                    <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Cerrar la cuenta</span>
                    </li>
                </ul>
                <div className="mt-auto flex justify-center">
                    <button className="w-full bg-gray-200 text-gray-700 py-5 rounded flex items-center justify-center">
                        <span>Cerrar sesión</span>
                        <img className="w-6 h-6 ml-2" src="/cerrar-sesion-alt.png" alt="Logout Icon" />
                    </button>
                </div>
            </div>

            {/* Footer Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-between px-6 py-2 md:hidden">
                <button className="text-gray-500">
                    <div className="rounded-full bg-gray-300 p-3">
                    <img className="w-12 h-12" src="/llave-inglesa.png" alt="Ajustes" />
                    </div>
                </button>
                <button className="text-gray-500">
                    <img className="w-6 h-6" src="/calendario-reloj.png" alt="Calendar" />
                </button>
                <button className="text-gray-500">
                        <img className="w-6 h-6" src="/chimenea-de-la-casa.png" alt="Home" />
                </button>
                <button className="text-gray-500">
                    <img className="w-6 h-6" src="/usuario.png" alt="Usuario" />
                </button>
                <button className="text-gray-500">
                    <img className="w-6 h-6" src="/grafico-mixto.png" alt="Grafico" />
                </button>
            </div>
        </div>
    );
};

export default SettingsPage;
