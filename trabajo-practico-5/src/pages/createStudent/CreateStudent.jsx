import React, { useState, useContext } from "react";
// Ya no necesitamos importar MainLayout aquí, porque es el padre en la ruta
// import { MainLayout } from "../../layouts/MainLayout.jsx";
import "./CreateStudent.css"; // Asegúrate de que este CSS no oculte el contenido
import { addAlumno } from "../../components/ui/alumnoService.js";
import { Snackbar } from "../../components/ui/snackbar/Snackbar.jsx";
import { MaintContext } from "../../layouts/MainLayout.jsx"; // La ruta debe ser correcta

export const CreateStudent = () => {
  const { alumnos, setAlumnos } = useContext(MaintContext);
  console.log(alumnos, "alumnos en createStudent");
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
    const newArray = addAlumno(alumnos, singleAlumno);
    setAlumnos(newArray);
    setSingleAlumno({
      Lu: "",
      nombre: "",
      apellido: "",
      curso: "",
      email: "",
      domicilio: "",
      telefono: "",
    });
    setOpenSnackbar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSingleAlumno({
      ...singleAlumno,
      [name]: value,
      id: Date.now(), // Asegúrate de que addAlumno maneje este ID o que sea único
    });
  };

  return (
    // ¡¡¡IMPORTANTE!!! Eliminamos <MainLayout> de aquí
    // El contenido de CreateStudent debe ser el que se renderiza directamente en el <Outlet />
    <div style={{ padding: "20px" }}>
      {" "}
      {/* Añadimos un padding básico para asegurar visibilidad */}
      <h1>Create student</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label htmlFor="Lu">Libreta Universitaria</label>
            <input
              onChange={handleChange}
              type="text"
              required={true}
              name="Lu"
              value={singleAlumno.Lu}
              id="Lu"
            />
          </div>

          <div>
            <label htmlFor="nombre">Nombre</label>
            <input
              onChange={handleChange}
              type="text"
              required={true}
              name="nombre"
              value={singleAlumno.nombre}
              id="nombre"
            />
          </div>

          <div>
            <label htmlFor="apellido">Apellido</label>
            <input
              onChange={handleChange}
              type="text"
              required={true}
              name="apellido"
              value={singleAlumno.apellido}
              id="apellido"
            />
          </div>

          <div>
            <label htmlFor="curso">Curso</label>
            <input
              onChange={handleChange}
              type="text"
              required={true}
              name="curso"
              value={singleAlumno.curso}
              id="curso"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              required={true}
              name="email"
              value={singleAlumno.email}
              id="email"
            />
          </div>

          <div>
            <label htmlFor="domicilio">Domicilio</label>
            <input
              onChange={handleChange}
              type="text"
              required={true}
              name="domicilio"
              value={singleAlumno.domicilio}
              id="domicilio"
            />
          </div>

          <div>
            <label htmlFor="telefono">Teléfono</label>
            <input
              onChange={handleChange}
              type="text"
              required={true}
              name="telefono"
              value={singleAlumno.telefono}
              id="telefono"
            />
          </div>

          <button type="submit">Crear Estudiante</button>
        </form>
      </div>
      <Snackbar
        message="Alumno agregado con éxito ✅"
        visible={openSnackbar}
        duration={2500}
        onClose={() => setOpenSnackbar(false)}
        variant="submit"
      />
      <p>
        Para crear un estudiante, complete el formulario con los datos
        requeridos.
      </p>
    </div>
    // ¡¡¡IMPORTANTE!!! Eliminamos el cierre de </MainLayout>
  );
};
