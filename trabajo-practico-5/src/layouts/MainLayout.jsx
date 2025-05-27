// layouts/MainLayout.jsx
import { Navbar } from "../components/navbar/Navbar";
import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { CreateStudent } from "../pages/createStudent/CreateStudent";
export const MaintContext = createContext();
export const MainLayout = () => {
  const [alumnos, setAlumnos] = useState([
    {
      Lu: "APU00999",
      nombre: "Maria Eugenia",
      apellido: "Diaz",
      curso: "Tercero",
      email: "mariadiaz@gmail.com",
      domicilio: "Av. Congreso 125",
      telefono: "3884895999",
    },
  ]);

  return (
    <MaintContext.Provider value={{ alumnos, setAlumnos }}>
      <Navbar />
      <Outlet /> {/* Aqui se renderizann las páginas hijas */}
    </MaintContext.Provider>
  );
};
