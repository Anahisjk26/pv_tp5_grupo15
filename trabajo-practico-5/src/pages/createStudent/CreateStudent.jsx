import { useState, useContext } from "react";
import {
  TextField,
  Button,
  Snackbar,
  Alert,
  Container,
  Typography,
} from "@mui/material";
import { addAlumno } from "../../components/ui/alumnoService.js";
import { MaintContext } from "../../layouts/MainLayout.jsx";
import { SnackbarComponent } from "../../components/ui/snackbar/Snackbar.jsx";


export const CreateStudent = () => {
  const { alumnos, setAlumnos } = useContext(MaintContext);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [singleAlumno, setSingleAlumno] = useState({
    Lu: "",
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    telefono: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAlumno = { ...singleAlumno, id: Date.now() };
    const newArray = addAlumno(alumnos, newAlumno);
    setAlumnos(newArray);
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
        Añadir estudiante
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          id="Lu"
          name="Lu"
          label="Libreta Universitaria"
          value={singleAlumno.Lu}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          id="nombre"
          name="nombre"
          label="Nombre"
          value={singleAlumno.nombre}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          id="apellido"
          name="apellido"
          label="Apellido"
          value={singleAlumno.apellido}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          id="curso"
          name="curso"
          label="Curso"
          value={singleAlumno.curso}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          id="email"
          name="email"
          label="Email"
          type="email"
          value={singleAlumno.email}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          id="domicilio"
          name="domicilio"
          label="Domicilio"
          value={singleAlumno.domicilio}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          id="telefono"
          name="telefono"
          label="Teléfono"
          value={singleAlumno.telefono}
          onChange={handleChange}
          required
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

      <SnackbarComponent
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        message={"Alumno agregado con éxito"}
        severity="success"
        vertical="bottom"
        horizontal="center"
      />
    </Container>
  );
};
