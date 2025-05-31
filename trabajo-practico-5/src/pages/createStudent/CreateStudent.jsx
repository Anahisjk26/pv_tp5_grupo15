import React, { useState, useContext } from "react";
import {
  TextField,
  Button,
  Snackbar,
  Alert,
  Container,
  Typography,
} from "@mui/material";
import { addAlumno } from "../../services/alumnoService.js";
import { MaintContext } from "../../layouts/MainLayout.jsx";
import { useNavigate } from "react-router-dom";
import Selector from "../../components/ui/select/Select.jsx";
import Input from "../../components/ui/inputs/InputAdd.jsx";

export const CreateStudent = () => {
  const { alumnos, setAlumnos } = useContext(MaintContext);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const navigate = useNavigate();
  const [singleAlumno, setSingleAlumno] = useState({
    Lu: "",
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    telefono: "",
  });

  const cursosDisponibles = [
    { value: "1ro 1ra", label: "1ro 1ra" },
    { value: "1ro 2da", label: "1ro 2da" },
    { value: "2do 1ra", label: "2do 1ra" },
    { value: "3ro 1ra", label: "3ro 1ra" },
    { value: "4to 1ra", label: "4to 1ra" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAlumno = { ...singleAlumno, id: Date.now() };
    const newArray = addAlumno(alumnos, newAlumno);
    setAlumnos(newArray);
    setSnackbarMessage("Alumno agregado con éxito ✅");
    setOpenSnackbar(true);
    setSingleAlumno({
      Lu: "",
      nombre: "",
      apellido: "",
      curso: "",
      email: "",
      domicilio: "",
      telefono: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSingleAlumno({
      ...singleAlumno,
      [name]: value,
    });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Crear Estudiante
      </Typography>
      <form onSubmit={handleSubmit}>
        <Input
          id="Lu"
          name="Lu"
          label="Legajo Único (LU)"
          value={singleAlumno.Lu}
          onChange={handleChange}
          required
          type="text"
        />

        <Input
          id="nombre"
          name="nombre"
          label="Nombre"
          value={singleAlumno.nombre}
          onChange={handleChange}
          required
          type="text"
        />
        <Input
          id="apellido"
          name="apellido"
          label="Apellido"
          value={singleAlumno.apellido}
          onChange={handleChange}
          required
          type="text"
        />
        <Selector
          id="curso"
          label="Curso"
          name="curso"
          value={singleAlumno.curso}
          onChange={handleChange}
          options={cursosDisponibles}
        />
        <Input
          id="email"
          name="email"
          label="Email"
          value={singleAlumno.email}
          onChange={handleChange}
          required={true}
          type="email"
        />
        <Input
          id="domicilio"
          name="domicilio"
          label="Domicilio"
          value={singleAlumno.domicilio}
          onChange={handleChange}
          required={true}
          type="text"
        />
        <Input
          id="telefono"
          name="telefono"
          label="Teléfono"
          value={singleAlumno.telefono}
          onChange={handleChange}
          required={true}
          type="text"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
        >
          Crear Estudiante
        </Button>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};
