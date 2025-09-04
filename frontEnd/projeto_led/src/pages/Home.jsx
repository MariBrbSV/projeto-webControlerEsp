import React from "react";
import { FaTv, FaWater, FaThermometerHalf, FaSeedling } from "react-icons/fa";

export default function Home() {
  const projetos = [
    { nome: "Tela LED", link: "https://wokwi.com/projects/438623459890475009", icon: <FaTv className="w-6 h-6 text-blue-500" /> },
    { nome: "Status Boia", link: "https://wokwi.com/projects/439347362869754881", icon: <FaWater className="w-6 h-6 text-green-500" /> },
    { nome: "Sensor DHT", link: "https://wokwi.com/projects/439911413298509825", icon: <FaThermometerHalf className="w-6 h-6 text-red-500" /> },
    { nome: "Sensor Solo", link: "https://wokwi.com/projects/440002415689994241", icon: <FaSeedling className="w-6 h-6 text-indigo-500" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Projetos no Wokwi</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-2xl">
        {projetos.map((projeto, index) => (
          <a
            key={index}
            href={projeto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white shadow rounded-2xl hover:shadow-md transition"
          >
            {projeto.icon}
            <div>
              <h2 className="text-lg font-semibold">{projeto.nome}</h2>
              <p className="text-blue-600 text-sm">Abrir no Wokwi</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
