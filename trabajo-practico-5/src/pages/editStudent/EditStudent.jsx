import { useNavigate, useParams } from "react-router-dom";
import { NavigationButton } from "../../components/ui/buttons/NavigationButton";
import { useState, useContext, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
} from "@mui/material";
import { MaintContext } from "../../layouts/MainLayout.jsx";
import { SnackbarComponent } from "../../components/ui/snackbar/Snackbar.jsx";
import EditIcon from '@mui/icons-material/Edit';
export const EditStudent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { alumnos, onUpdatedAlumno } = useContext(MaintContext);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [alumnoToEdit, setAlumnoToEdit] = useState(null);

  const onBack = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumnoToEdit((prevAlumno) => ({
      ...prevAlumno,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (alumnoToEdit) {
      onUpdatedAlumno(alumnoToEdit);
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  useEffect(() => {
    // Buscamos el alumno en la lista de alumnos usando el 'id' (que es el Lu)
    const student = alumnos.find((alumno) => alumno.Lu === id);
    setAlumnoToEdit(student || false);
  }, [id, alumnos]);

  if (!alumnoToEdit) {
    navigate("/list-students");
    return null;

  }

  return (
    <>
      <div className="p-6">
        <NavigationButton onBack={onBack}></NavigationButton>
        <Container maxWidth="sm" sx={{ mt: 4 }}>
          <Typography sx={{ display: "flex", justifyContent: "start", alignItems: "center", gap: "10px" }} variant="h4" component="h1" gutterBottom>
            Editar estudiante  <EditIcon fontSize="medium"></EditIcon>
          </Typography>
          <form onSubmit={handleSubmit} className="form-edit">
            <TextField
              onChange={handleChange}
              value={alumnoToEdit?.Lu || ""}
              label="Lu:"
              name="Lu"
              fullWidth
              margin="normal"
              disabled // El LU  no se edita
            />
            <TextField
              onChange={handleChange}
              value={alumnoToEdit?.nombre || ""}
              label="Nombre :"
              name="nombre"
              fullWidth
              margin="normal"
            />
            <TextField
              onChange={handleChange}
              value={alumnoToEdit?.apellido || ""}
              label="Apellido :"
              name="apellido"
              fullWidth
              margin="normal"
            />
            <TextField
              onChange={handleChange}
              value={alumnoToEdit?.curso || ""}
              label="Curso :"
              name="curso"
              fullWidth
              margin="normal"
            />
            <TextField
              onChange={handleChange}
              value={alumnoToEdit?.email || ""}
              label="Email :"
              name="email"
              fullWidth
              margin="normal"
            />
            <TextField
              onChange={handleChange}
              value={alumnoToEdit?.domicilio || ""}
              label="Domicilio :"
              name="domicilio"
              fullWidth
              margin="normal"
            />
            <TextField
              onChange={handleChange}
              value={alumnoToEdit?.telefono || ""}
              label="Teléfono :"
              name="telefono"
              fullWidth
              margin="normal"
            />

            <Button sx={{ mt: 3 }} type="submit" variant="contained">
              Guardar Cambios
            </Button>
          </form>
        </Container>
      </div>

      <SnackbarComponent
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        message={"Alumno modificado con éxito"}
        severity="success"
        vertical="bottom"
        horizontal="center"
      />
    </>
  );
};
