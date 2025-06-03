// layouts/MainLayout.jsx
import { Navbar } from "../components/navbar/Navbar";
import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { CreateStudent } from "../pages/createStudent/CreateStudent";
export const MaintContext = createContext();

export const MainLayout = () => {
  const [alumnos, setAlumnos] = useState([]);

  const updateAlumno = (updatedStudent) => {
    const updatedList = alumnos.map((alumno) =>
      alumno.Lu === updatedStudent.Lu ? updatedStudent : alumno
    );
    setAlumnos(updatedList);
    console.log("Alumno actualizado:", updatedStudent);
  };

  return (
    <MaintContext.Provider
      value={{ alumnos, setAlumnos, onUpdatedAlumno: updateAlumno }}
    >
      <Navbar />
      <Outlet /> {/* Aqui se renderizann las páginas hijas */}
    </MaintContext.Provider>
  );
};
