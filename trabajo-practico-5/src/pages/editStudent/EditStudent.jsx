import { useNavigate } from "react-router-dom"
import { NavigationButton } from "../../components/ui/buttons/NavigationButton"


export const EditStudent = () => {
  // se usa useParams y los services

  // funcion para el back button
  const navigate = useNavigate()

  const onBack = () => {
    // lleva a la ruta anterior
    navigate(-1);
  }
  return (
    <div className="p-6">
      <NavigationButton onBack={onBack}></NavigationButton>
      {/* formulario para editar el usuario */}
      <div>
        <h1>Aqui se debe editar el estudiante mediante un form</h1>

      </div>

    </div>
  )
}
