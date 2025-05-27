import "./App.css";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/homePage/HomePage";
import { useState } from "react";

function App() {
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
  const [alumno, setAlumno] = useState({});

  return (
    <MainLayout>
      <HomePage></HomePage>
    </MainLayout>
  );
}

export default App;
