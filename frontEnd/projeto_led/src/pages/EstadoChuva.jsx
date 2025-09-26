import React from "react";
import { WiRain } from "react-icons/wi";

export default function EstadoChuva() {
  const estadoChuva = "Chovendo 🌧️";

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white rounded-2xl shadow-lg">
      <WiRain className="text-6xl text-blue-500 mb-4" />
      <h1 className="text-2xl font-bold text-gray-800">{estadoChuva}</h1>
      <p className="text-gray-600 mt-2">
        Monitoramento do estado da chuva em tempo real.
      </p>
    </div>
  );
}
