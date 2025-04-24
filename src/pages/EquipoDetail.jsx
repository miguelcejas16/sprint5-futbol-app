import { useParams, useNavigate } from "react-router-dom";
import { useEquipoContext } from "../context/EquipoContext";
import { useEffect, useState } from "react";

export default function EquipoDetail() {
  const { id } = useParams();
  const { getEquipo } = useEquipoContext();
  const [equipo, setEquipo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEquipo(id);
      setEquipo(data);
    };

    fetchData();
  }, [id, getEquipo]);

  if (!equipo) return <p>Cargando equipo...</p>;

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center px-4 py-16">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={equipo.logo}
          alt={equipo.name}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Detalle del equipo</h1>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{equipo.name}</h2>
          <p className="mb-1 text-gray-700 dark:text-gray-300">
            <strong>Estadio:</strong> {equipo.stadium}
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            <strong>ID:</strong> {equipo.id}
          </p>
          <button
            onClick={() => navigate("/equipos")}
            className="self-start mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}
