import React, { useContext } from 'react'
import { MaintContext } from '../../layouts/MainLayout';

export const CreateStudent = () => {
  const { alumnos, setAlumnos } = useContext(MaintContext);
  console.log(alumnos, "alumnos en createStudent");

  return (

    <h1>Create student</h1>

  )
}
