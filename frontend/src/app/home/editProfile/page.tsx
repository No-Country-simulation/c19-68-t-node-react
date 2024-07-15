import React from 'react';

const EditProfilePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 md:p-8">
            {/* Header */}
            <div className="flex items-center w-full justify-between mb-4">
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <img className="w-5 h-5" src="/circulo-de-usuario.png" alt="User Icon" />
                    </div>
                    <span className="font-semibold">Editar Perfil</span>
                </div>
                <button className="text-gray-500">
                    <img className="w-6 h-6" src="/x.png" alt="Close Icon" />
                </button>
            </div>

            {/* Profile Picture */}
            <div className="w-full flex flex-col items-center mb-4">
                <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center mb-2">
                    <img className="w-12 h-12" src="/lapiz-de-usuario.png" alt="Edit Photo" />
                </div>
                <button className="text-blue-500">Editar foto de perfil</button>
            </div>

            {/* Form */}
            <form className="w-full bg-white p-4 rounded-lg shadow">
                <div className="mb-4">
                    <label className="block text-gray-700">Fecha de Nacimiento</label>
                    <input type="text" className="w-full border-gray-300 rounded mt-1" placeholder="AAAA, MM, DD" />
                </div>
                <div className="mb-4 flex space-x-4">
                    <div className="flex-1">
                        <label className="block text-gray-700">Edad</label>
                        <input type="text" className="w-full border-gray-300 rounded mt-1" />
                    </div>
                    <div className="flex-1">
                        <label className="block text-gray-700">ID</label>
                        <input type="text" className="w-full border-gray-300 rounded mt-1" />
                    </div>
                    <div className="flex-1">
                        <label className="block text-gray-700">Número</label>
                        <input type="text" className="w-full border-gray-300 rounded mt-1" />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">E-mail</label>
                    <input type="email" className="w-full border-gray-300 rounded mt-1" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Dirección</label>
                    <input type="text" className="w-full border-gray-300 rounded mt-1" />
                </div>
                <div className="mb-4 flex space-x-4">
                    <div className="flex-1">
                        <label className="block text-gray-700">País</label>
                        <input type="text" className="w-full border-gray-300 rounded mt-1" />
                    </div>
                    <div className="flex-1">
                        <label className="block text-gray-700">Código postal</label>
                        <input type="text" className="w-full border-gray-300 rounded mt-1" />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Teléfono</label>
                    <input type="text" className="w-full border-gray-300 rounded mt-1" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Nacionalidad</label>
                    <input type="text" className="w-full border-gray-300 rounded mt-1" />
                </div>
                <button className="w-full bg-purple-500 text-white py-2 rounded">Guardar</button>
            </form>

            {/* Footer Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-blue-900 text-white shadow-lg flex justify-between px-6 py-2 md:hidden">
                <button className="flex flex-col items-center text-gray-300">
                    <img className="w-6 h-6 mb-1" src="/llave-inglesa.png" alt="Configuración" />
                    <span className="text-xs">Configuración</span>
                </button>
                <button className="flex flex-col items-center text-gray-300">
                    <img className="w-6 h-6 mb-1" src="/calendario-reloj.png" alt="Agenda" />
                    <span className="text-xs">Agenda</span>
                </button>
                <button className="flex flex-col items-center text-white">
                    <img className="w-6 h-6 mb-1" src="/chimenea-de-la-casa.png" alt="Inicio" />
                    <span className="text-xs">Inicio</span>
                </button>
                <button className="flex flex-col items-center text-gray-300">
                    <img className="w-6 h-6 mb-1" src="/usuario.png" alt="Mi perfil" />
                    <span className="text-xs">Mi perfil</span>
                </button>
                <button className="flex flex-col items-center text-gray-300">
                    <img className="w-6 h-6 mb-1" src="/grafico-mixto.png" alt="Mi Actividad" />
                    <span className="text-xs">Mi Actividad</span>
                </button>
            </div>
        </div>
    );
};

export default EditProfilePage;
