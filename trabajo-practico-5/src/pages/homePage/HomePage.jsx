
import { useContext } from "react";
import "./HomePage.css"
import { MaintContext } from "../../layouts/MainLayout";

export const HomePage = () => {
  const { alumnos, setAlumnos } = useContext(MaintContext);
  console.log(alumnos, "alumnos en el homePage");

  return (
    <div>
      <h1>Presentacion del sistema</h1>
    </div>
  )
}
