import { useContext, useState, useMemo } from "react";
import "./ListStudents.css"
import { MaintContext } from "../../layouts/MainLayout";
import { TableComponent } from "../../components/table/TableComponent";
import { Typography, TextField } from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';

export const ListStudents = () => {
  const { alumnos } = useContext(MaintContext);
  const [findStudent, setFindStudent] = useState("");

  // Filtramos los alumnos basándonos en el texto de búsqueda
  const filteredAlumnos = useMemo(() => {
    if (!findStudent) return alumnos;

    const searchTerm = findStudent.toLowerCase();
    return alumnos.filter(alumno =>
      alumno.nombre?.toLowerCase().includes(searchTerm) ||
      alumno.apellido?.toLowerCase().includes(searchTerm) ||
      alumno.Lu?.toString().includes(searchTerm)
    );
  }, [alumnos, findStudent]);

  const columns = [
    { label: "Lu", align: "left" },
    { label: "nombre", align: "center" },
    { label: "apellido", align: "center" },
    { label: "curso", align: "center" },
    { label: "email", align: "center" },
    { label: "domicilio", align: "center" },
    { label: "telefono", align: "center" },
    { label: "Acciones", align: "right" }
  ];

  return (
    <div className="w-full justify-center items-center px-6 lg:px-40 mt-16">
      <Typography sx={{ display: "flex", mb: 4, justifyContent: "start", alignItems: "center", gap: "10px" }} variant="h4" component="h1" gutterBottom>
        Lista de Estudiantes <GroupsIcon fontSize="large"></GroupsIcon>
      </Typography>
      <div className="w-2/3 lg:w-1/4 flex justify-center items-center mb-5">
         <TextField
        id="search-student"
        label=""
        value={findStudent}
        onChange={(e) => setFindStudent(e.target.value)}
        placeholder="Buscar estudiante por nombre, apellido o LU"
        size="small"
        sx={{ mb: 5, width: "100%" }}
      />
      </div>
     
      <TableComponent data={filteredAlumnos} columns={columns}></TableComponent>
    </div>
  )
}