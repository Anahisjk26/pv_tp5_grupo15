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
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Input from "../../components/ui/inputs/InputAdd.jsx";
import Selector from "../../components/ui/select/Select.jsx";
export const CreateStudent = () => {
  const context = useContext(MaintContext);

  // Protección por si el contexto es undefined
  if (!context) {
    throw new Error("ListStudents debe estar dentro de MaintContext.Provider");
  }

  const { alumnos, setAlumnos } = context;
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [messageError, setMessageError] = useState("");
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

  const cursosDisponibles = [
    { value: "1ro 1ra", label: "1ro 1ra" },
    { value: "1ro 2da", label: "1ro 2da" },
    { value: "1ro 3ra", label: "1ro 3ra" },
    { value: "2do 1ra", label: "2do 1ra" },
    { value: "2do 2da", label: "2do 2da" },
    { value: "2do 3ra", label: "2do 3ra" },
    { value: "3ro 1ra", label: "3ro 1ra" },
    { value: "3ro 2da", label: "3ro 2da" },
    { value: "3ro 3ra", label: "3ro 3ra" },
    { value: "4to 1ra", label: "4to 1ra" },
    { value: "4to 2da", label: "4to 2da" },
    { value: "4to 3ra", label: "4to 3ra" },
    { value: "5to 1ra", label: "5to 1ra" },
    { value: "5to 2da", label: "5to 2da" },
    { value: "5to 3ra", label: "5to 3ra" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    let band = false;
    alumnos.map((aumno) => {
      if (aumno.Lu === singleAlumno.Lu) {
        band = true;
      }
    });
    if (!band && singleAlumno.Lu !== "" && singleAlumno.Lu.length > 0 && singleAlumno.Lu.length <= 4) {
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
      if (singleAlumno.Lu.length > 4) {
        setMessageError("Ingrese un LU válido (1 a 4 caracteres)");
      } else {
        setMessageError("Ya existe un alumno con esa Libreta universitaria, intentelo nuevamente.");
      }
      setOpenSnackbarError(true);
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
      <Typography
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: "10px",
        }}
        variant="h4"
        component="h1"
        gutterBottom
      >
        Añadir estudiante{" "}
        <PersonAddAlt1Icon fontSize="large"></PersonAddAlt1Icon>
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
        message={
          messageError
        }
        severity="warning"
        vertical="bottom"
        horizontal="center"
      />
    </Container>
  );
};
