import { useState, useEffect } from "react";
import { enderecoServidor } from "../../utils";
import { IoWater, IoPower } from "react-icons/io5";
import { FaTint } from "react-icons/fa";

export default function Irrigacao() {
  const [dados, setDados] = useState({
    nivelAgua: "",
    umidadeSolo: "",
    irrigacao: false,
  });
  const [loading, setLoading] = useState(false);

  const buscarDados = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${enderecoServidor}/api/Irrigacao`);
      const data = await response.json();
      setDados(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarDados();
    const intervalo = setInterval(buscarDados, 5000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6 flex items-center justify-center">
        <IoWater className="text-blue-600 w-7 h-7 mr-2" />
        Monitoramento da Irrigação
      </h2>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-8">
          <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-3"></div>
          <p className="text-gray-600 font-medium">Carregando dados...</p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Card Nível de Água */}
          <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-blue-400 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <IoWater className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Nível de Água</h3>
                <p className="text-2xl font-bold text-blue-600">
                  {dados.nivelAgua || "--"}%
                </p>
              </div>
            </div>
          </div>

          {/* Card Umidade do Solo */}
          <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-blue-300 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <FaTint className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Umidade do Solo</h3>
                <p className="text-2xl font-bold text-blue-600">
                  {dados.umidadeSolo || "--"}%
                </p>
              </div>
            </div>
          </div>

          {/* Card Status Irrigação */}
          <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <IoPower
                    className={`w-6 h-6 ${
                      dados.irrigacao ? "text-blue-600" : "text-red-600"
                    }`}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Irrigação</h3>
                  <p
                    className={`text-2xl font-bold ${
                      dados.irrigacao ? "text-blue-600" : "text-red-600"
                    }`}
                  >
                    {dados.irrigacao ? "Ligada" : "Desligada"}
                  </p>
                </div>
              </div>
              <div
                className={`w-3 h-3 rounded-full ${
                  dados.irrigacao ? "bg-blue-500" : "bg-red-500"
                }`}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Botão atualizar */}
      <button
        onClick={buscarDados}
        disabled={loading}
        className="w-full mt-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            Atualizando...
          </>
        ) : (
          <>
            <IoWater className="w-5 h-5 mr-2" />
            Atualizar Dados
          </>
        )}
      </button>
    </div>
  );
}
