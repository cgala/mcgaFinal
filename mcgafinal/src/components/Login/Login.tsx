import './Login.css'
import { useState } from "react";
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");

  const loginWithUsernameAndPassword = async (e : any) => {
    e.preventDefault();
    try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/');
    } catch {
        setNotice("Contraseña erronea");
    }
}

  return (
    <div>
    <div>
        <form>
            { "" !== notice && <div className = "errorContra">{ notice }</div>}                  
            <div>
                <input type = "text" id = "exampleInputEmail1" placeholder = "Nombre@ejemplo.com" value = { email } onChange = { (e) => setEmail(e.target.value) }></input>                
            </div>
            <div>
                <input type = "password" id = "exampleInputPassword1" placeholder = "Password" value = { password } onChange = { (e) => setPassword(e.target.value) }></input>                
            </div>
            <div>
                <button type = "submit" onClick = {(e) => loginWithUsernameAndPassword(e)}>INGRESAR</button>
            </div>
            <div>
                <span>No estas registrado? <Link to = "./signup">Registrarse</Link></span>
            </div>
        </form>
    </div>
</div>
  )
}

export default Login

