
import { useContext } from "react";
import "./ListStudents.css"
import { MaintContext } from "../../layouts/MainLayout";
import { TableComponent } from "../../components/table/TableComponent";
import { Typography } from "@mui/material";


export const ListStudents = () => {
  const { alumnos, setAlumnos } = useContext(MaintContext);

  const columns = [{ label: "Lu", align: "left" }, { label: "nombre", align: "center" }, { label: "apellido", align: "center" }, { label: "curso", align: "center" }, { label: "email", align: "center" }, { label: "domicilio", align: "center" }, { label: "telefono", align: "center" }, { label: "Acciones", align: "right" }]

  console.log(alumnos, "list");

  return (

    <div className="w-full justify-center items-center px-40 mt-16">
      <Typography variant="h4" component="h1" gutterBottom>
        Lista de Estudiantes
      </Typography>

      <TableComponent data={alumnos} columns={columns}></TableComponent>


    </div>

  )
}
