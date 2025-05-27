export const addAlumno = (alumnos, nuevoAlumno) => {
  return [...alumnos, nuevoAlumno];
};
export const updateAlumno = (alumnos, updatedAlumno) => {
  return alumnos.map((alumno) =>
    alumno.id === updatedAlumno.id ? updatedAlumno : alumno
  );
};
