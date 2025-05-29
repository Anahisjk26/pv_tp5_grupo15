import { useNavigate, useParams } from "react-router-dom";
import { NavigationButton } from "../../components/ui/buttons/NavigationButton";
import { useState, useContext, useEffect } from "react";
import {
  TextField,
  Button,
  Snackbar,
  Alert,
  Container,
  Typography,
} from "@mui/material";
import { MaintContext } from "../../layouts/MainLayout.jsx";
import { SnackbarComponent } from "../../components/ui/snackbar/Snackbar.jsx";
import { ActionsTable } from "../../components/table/ActionsTable.jsx";

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
    setAlumnoToEdit(student || {});
  }, [id, alumnos]);

  if (!alumnoToEdit) {
    return <div>Cargando datos del alumno...</div>;
  }

  return (
    <>
      <div className="p-6">
        <NavigationButton onBack={onBack}></NavigationButton>
        <div>
          <h1> Editar Estudiante </h1>
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

            <Button type="submit" variant="contained">
              Guardar Cambios
            </Button>
          </form>
        </div>
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
