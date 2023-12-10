import { Link } from 'react-router-dom'
import './Barra.css'

const Barra = () => {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="login">Iniciar Sesion</Link>
            <Link to="nosotros">Nosotros</Link>
            <Link to="registrarse">Registrarse</Link>
            <Link to="listaMod">Modificar Alumnos</Link>
            <Link to="agregar">Agregar Alumnos</Link>
        </nav>      
    </div>
  )
}

export default Barra
