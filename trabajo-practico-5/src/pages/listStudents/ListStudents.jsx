
import { useContext } from "react";
import "./ListStudents.css"
import { MaintContext } from "../../layouts/MainLayout";
import { TableComponent } from "../../components/table/TableComponent";
import { Typography } from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';
export const ListStudents = () => {
  const { alumnos, setAlumnos } = useContext(MaintContext);

  const columns = [{ label: "Lu", align: "left" }, { label: "nombre", align: "center" }, { label: "apellido", align: "center" }, { label: "curso", align: "center" }, { label: "email", align: "center" }, { label: "domicilio", align: "center" }, { label: "telefono", align: "center" }, { label: "Acciones", align: "right" }]



  return (

    <div className="w-full justify-center items-center px-6 lg:px-40 mt-16">
      <Typography sx={{ display: "flex", mb: 4, justifyContent: "start", alignItems: "center", gap: "10px" }} variant="h4" component="h1" gutterBottom>
        Lista de Estudiantes <GroupsIcon fontSize="large"></GroupsIcon>
      </Typography>

      <TableComponent data={alumnos} columns={columns}></TableComponent>


    </div>

  )
}
