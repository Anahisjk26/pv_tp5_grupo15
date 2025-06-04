
import { useNavigate, useParams } from "react-router-dom"
import { useContext } from "react"
import { NavigationButton } from "../../components/ui/buttons/NavigationButton"
import { MaintContext } from "../../layouts/MainLayout"
import { StudentInfo } from "./StudentInfo" // componente separado con el detalle
import "./StudentDetail.css"

export const StudentDetail = () => {
  const navigate = useNavigate()
  // se usa useParams 
  const context = useContext(MaintContext);

  // Protección por si el contexto es undefined
  if (!context) {
    return null
  }

  const { id } = useParams()
  const { alumnos } = useContext(MaintContext)

  // BUSCAMOS AL ALUMNO POR SU LU
  const alumno = alumnos.find(a => a.Lu.toString() === id)

  // funcion para el back button

  const onBack = () => {
    // lleva a la ruta anterior
    navigate(-1);

  }
  return (
    <section className="p-6 animate-fade-in-down">
      <NavigationButton onBack={onBack}></NavigationButton>
      {/* Mostramos el detalle del ALUMNO */}
      <StudentInfo alumno={alumno} />
    </section>


  )
}
