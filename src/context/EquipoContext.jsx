// src/context/EquipoContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const EquipoContext = createContext();

const API_URL = "https://6806ef23e81df7060eb86085.mockapi.io/v1/teams";

export const EquipoProvider = ({ children }) => {
  const [equipos, setEquipos] = useState([]);

  // GET todos los equipos
  const getEquipos = async () => {
    try {
      const res = await axios.get(API_URL);
      setEquipos(res.data);
    } catch (error) {
      console.error("Error al obtener los equipos:", error);
      toast.error("Error al obtener los equipos");
    }
  };

  // GET un equipo por ID
  const getEquipo = async (id) => {
    try {
      const res = await axios.get(`${API_URL}/${id}`);
      return res.data;
    } catch (error) {
      console.error("Error al obtener el equipo:", error);
      toast.error("Error al obtener el equipo");
    }
  };

  // POST - crear un nuevo equipo
  const createEquipo = async (data) => {
    try {
      const res = await axios.post(API_URL, data);
      setEquipos([...equipos, res.data]);
      toast.success("Equipo creado con éxito");
    } catch (error) {
      console.error("Error al crear el equipo:", error);
      toast.error("Error al crear el equipo");
    }
  };

  // PUT - actualizar un equipo
  const updateEquipo = async (id, data) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, data);
      setEquipos(
        equipos.map((equipo) => (equipo.id === id ? res.data : equipo))
      );
      toast.success("Equipo actualizado con éxito");
    } catch (error) {
      console.error("Error al actualizar el equipo:", error);
      toast.error("Error al actualizar el equipo");
    }
  };

  // DELETE - eliminar un equipo
  const deleteEquipo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setEquipos(equipos.filter((equipo) => equipo.id !== id));
      toast.success("Equipo eliminado con éxito");
    } catch (error) {
      console.error("Error al eliminar el equipo:", error);
      toast.error("Error al eliminar el equipo");
    }
  };

  // Opcional: cargar los equipos al iniciar
  useEffect(() => {
    getEquipos();
  }, []);

  return (
    <EquipoContext.Provider
      value={{
        equipos,
        getEquipos,
        getEquipo,
        createEquipo,
        updateEquipo,
        deleteEquipo,
      }}
    >
      {children}
    </EquipoContext.Provider>
  );
};

export const useEquipoContext = () => useContext(EquipoContext);
