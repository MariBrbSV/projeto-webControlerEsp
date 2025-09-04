import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { PiHouseBold, PiUserFill } from "react-icons/pi";
import { MdSettings, MdMenu, MdClose } from "react-icons/md";
import { PiPlantDuotone } from "react-icons/pi";
import { IoMdHelpBuoy } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import TelaLed from "./TelaLed";
import BoiaStatus from "./BoiaStatus";
import SensorDht from "./SensorDht";
import SensorSolo from "./SensorSolo";
import Home from "./Home";


export default function Principal() {
  const [menuAberto, setMenuAberto] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/Home", label: "Home", icon: <PiHouseBold /> },
    { to: "/TelaLed", label: "Tela Led", icon: <FaRegLightbulb /> },
    { to: "/BoiaStatus", label: "Status Boia", icon: <IoMdHelpBuoy /> },
    { to: "/SensorDht", label: "Sensor DHT", icon: <WiHumidity /> },
    { to: "/SensorSolo", label: "Sensor Solo", icon: <PiPlantDuotone /> },
    
  ];

  return (
    <div className="flex h-screen font-sans">
      {/* SIDEBAR */}
      <section
        className={`fixed z-30 inset-y-0 left-0 transform w-64
            bg-gray-900 text-white p-5 shadow-2xl
            transition-transform duration-300 ease-in-out 
            md:relative md:translate-x-0 ${
              menuAberto ? "-translate-x-0" : "-translate-x-full"
            }`}
      >
        <div className="flex justify-between items-center mb-8">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            🌌 Dashboard
          </span>
          <button
            className="md:hidden hover:text-cyan-400 transition"
            onClick={() => setMenuAberto(false)}
          >
            <MdClose className="w-6 h-6" />
          </button>
        </div>

        <nav className="space-y-3">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuAberto(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                ${
                  location.pathname === link.to
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                    : "hover:bg-gray-800 hover:text-cyan-400"
                }`}
            >
              <div className="text-lg">{link.icon}</div>
              <span className="font-medium tracking-wide">{link.label}</span>
            </Link>
          ))}
        </nav>
      </section>

      {/* MAIN CONTENT */}
      <section className="flex-1 p-6 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-900 w-full overflow-auto">
        <header className="flex items-center justify-between mb-6">
          <button
            className="text-gray-800 md:hidden hover:text-cyan-500 transition"
            onClick={() => setMenuAberto(true)}
          >
            <MdMenu className="w-7 h-7" />
          </button>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            🌐 Painel de Monitoramento
          </h1>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<TelaLed />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/TelaLed" element={<TelaLed />} />
            <Route path="/BoiaStatus" element={<BoiaStatus />} />
            <Route path="/SensorDht" element={<SensorDht />} />
            <Route path="/SensorSolo" element={<SensorSolo />} />
            
          </Routes>
        </main>
      </section>
    </div>
  );
}
