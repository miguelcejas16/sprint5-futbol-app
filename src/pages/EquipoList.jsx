import { useEquipoContext } from "../context/EquipoContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function EquipoList() {
  const { equipos, deleteEquipo } = useEquipoContext();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEquipo(id);
      }
    });
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center px-4 py-16">
      <div className="bg-gray-800 rounded-lg shadow-lg max-w-4xl w-full p-10 text-center">
          <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-6">
            Listado de Equipos
          </h3>
        {equipos.length === 0 ? (
          <p className="text-white">No hay equipos.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {equipos.map((equipo) => (
              <div
                key={equipo.id}
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
              >
                  <img
                    className="w-full h-48 object-contain p-8 rounded-t-lg"
                    src={equipo.logo}
                    alt={equipo.name}
                  />
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {equipo.name}
                    </h5>
                  </a>
                  <p className="text-sm text-gray-400 dark:text-gray-300 mb-2">
                    Estadio: {equipo.stadium}
                  </p>
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => navigate(`/equipos/${equipo.id}`)}
                      className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Ver detalle
                    </button>
                    <button
                      onClick={() => navigate(`/equipos/${equipo.id}/edit`)}
                      className="text-sm px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(equipo.id)}
                      className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
