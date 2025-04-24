import { useState } from "react";
import { useEquipoContext } from "../context/EquipoContext";
import { useNavigate } from "react-router-dom";

export default function EquipoCreate() {
  const [form, setForm] = useState({
    name: "",
    logo: "",
    stadium: "",
  });

  const navigate = useNavigate();
  const { createEquipo } = useEquipoContext();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!form.name || !form.logo || !form.stadium) {
      alert("Por favor completá todos los campos.");
      return;
    }

    createEquipo(form);
    navigate("/equipos");
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
  <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md p-6 dark:bg-gray-800 dark:border-gray-700">
    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-6">
      Crear nuevo equipo
    </h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Nombre
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="logo"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Logo (URL)
        </label>
        <input
          type="text"
          name="logo"
          id="logo"
          value={form.logo}
          onChange={handleChange}
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="stadium"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Estadio
        </label>
        <input
          type="text"
          name="stadium"
          id="stadium"
          value={form.stadium}
          onChange={handleChange}
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Guardar equipo
      </button>
    </form>
  </div>
</section>

  );
}
