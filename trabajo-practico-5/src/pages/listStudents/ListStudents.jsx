import { useContext } from "react";
import "./ListStudents.css"
import { MaintContext } from "../../layouts/MainLayout";
export const ListStudents = () => {
  const { alumnos, setAlumnos } = useContext(MaintContext);
  return (

    <div>{alumnos.map((al) => {
      return (
        <li key={al.nombre}>{al.nombre}</li>
      )
    })}</div>

  )
}
