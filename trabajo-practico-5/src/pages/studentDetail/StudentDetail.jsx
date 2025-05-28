
import { useNavigate } from "react-router-dom"
import { NavigationButton } from "../../components/ui/buttons/NavigationButton"
import "./StudentDetail.css"

export const StudentDetail = () => {
  const navigate = useNavigate()
  // se usa useParams 
  // funcion para el back button

  const onBack = () => {
    // lleva a la ruta anterior
    navigate(-1);

  }
  return (
    <section className="p-6">
      <NavigationButton onBack={onBack}></NavigationButton>
      <div>
        <h1>Perfil del usuario</h1>
      </div>
    </section>


  )
}
