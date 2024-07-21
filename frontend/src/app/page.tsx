import Image from 'next/image';

const HomePage = () => {
    const currentDate = new Date().getDate();
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 md:p-8">
            {/* Header */}
            <div className="flex items-center w-full justify-between mb-4">
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <span className="font-semibold">Pepito Perez</span>
                </div>
                <div className="w-10 h-10 bg-gray-300"></div>
            </div>

            {/* Image Slider */}
            <div className="w-full bg-gray-300 h-40 md:h-60 lg:h-80 mb-4 rounded-lg">
                <img className='w-full bg-gray-300 h-40 md:h-60 lg:h-80 mb-4 rounded-lg' src="https://8e93beb6.rocketcdn.me/storage/2023/03/pediatra.jpg" alt="" />
            </div>

            {/* Appointment Section */}
            <div className="w-full bg-white p-4 mb-4 rounded-lg shadow md:flex md:items-center md:justify-between">
                <div>
                    <span>No hay citas programadas para el día de hoy</span>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 md:mt-0">Agendar cita</button>
                <div className="flex items-center justify-between md:ml-4">
                    
                    <div className="relative ml-2">
                        <img className="w-17 h-17 rounded-lg" src="/calendario-pagina-ultrafina-vacia.png" alt="Calendario" />
                        <span className="absolute inset-0 flex items-center justify-center text-black font-bold text-4xl">
                            {currentDate}
                        </span>
                        <span>Julio 2024</span>
                    </div>
                </div>
            </div>

            {/* Last Consultations Section */}
            <div className="w-full bg-white p-4 mb-4 rounded-lg shadow">
                <h2 className="font-semibold mb-2">Últimas consultas</h2>
                <div className="bg-gray-300 h-10 rounded mb-2"></div>
                <div className="bg-gray-300 h-10 rounded mb-2"></div>
                <div className="bg-gray-300 h-10 rounded"></div>
            </div>

            {/* Health Notifications Section */}
            <div className="w-full bg-white p-4 mb-4 rounded-lg shadow">
                <h2 className="font-semibold mb-2">Noti-salud</h2>
                <div className="flex flex-col md:flex-row md:space-x-2">
                    <div className="bg-gray-300 h-20 w-full md:w-1/3 rounded mb-2 md:mb-0"></div>
                    <div className="bg-gray-300 h-20 w-full md:w-1/3 rounded mb-2 md:mb-0"></div>
                    <div className="bg-gray-300 h-20 w-full md:w-1/3 rounded"></div>
                </div>
            </div>

        </div>
    );
};

export default HomePage;