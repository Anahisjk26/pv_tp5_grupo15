import { useState, useContext } from "react";
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
import { SnackbarComponent } from "../../components/ui/snackbar/Snackbar.jsx";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export const CreateStudent = () => {
  const { alumnos, setAlumnos } = useContext(MaintContext);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openSnackbarError, setOpenSnackbarError] = useState(false);
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
    let band = false;
    alumnos.map((aumno) => {
      if (aumno.Lu === singleAlumno.Lu) {
        band = true;
      }
    })
    if (!band) {

      const newArray = addAlumno(alumnos, singleAlumno);
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
    } else {
      setOpenSnackbarError(true)
    }

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
  const handleCloseSnackbarError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbarError(false);
  };
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography sx={{ display: "flex", justifyContent: "start", alignItems: "center", gap: "10px" }} variant="h4" component="h1" gutterBottom>
        Añadir estudiante <PersonAddAlt1Icon fontSize="large"></ PersonAddAlt1Icon>
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
      <SnackbarComponent
        open={openSnackbarError}
        onClose={handleCloseSnackbarError}
        message={" Ya existe un alumno con esa Libreta universitaria, intentelo nuevamente."}
        severity="warning"
        vertical="bottom"
        horizontal="center"
      />
    </Container>
  );
};
