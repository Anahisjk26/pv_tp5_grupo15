import React, { useState } from "react";
import { MainLayout } from "../../layouts/MainLayout";
import "./CreateStudent.css";
import { addAlumno } from "../../components/ui/alumnoService";
import { Snackbar } from "../../components/ui/snackbar/Snackbar";

export const CreateStudent = (alumnos, setAlumnos) => {
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
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSingleAlumno({
      ...singleAlumno,
      [name]: value,
    });
  };

  return (
    <MainLayout>
      <h1>Crear nuevo estudiante</h1>
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
        message="Estudiante creado exitosamente"
        visible={true}
        onClose={() => {}}
        duration={5000}
        variant="submit"
      />
      <p>
        Para crear un estudiante, complete el formulario con los datos
        requeridos.
      </p>
    </MainLayout>
  );
};
