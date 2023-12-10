import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";



const Registrarse = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notice, setNotice] = useState("");
  const signupWithUsernameAndPassword = async (e : any) => {
    e.preventDefault();

    if (password === confirmPassword) {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("El usuario ah sido registrado")
            navigate("/");
        } catch {
            setNotice("Sorry, something went wrong. Please try again.");
        }     
    } else {
        setNotice("Passwords don't match. Please try again.");
    }
};

  return (
        <div>
            <div >
                <form>
                    { "" !== notice && <div>{ notice }</div>}
                    <div>
                        <label >Enter an email address for your username</label>
                        <input id = "signupEmail" type = "text" placeholder = "nombre@ejemplo.com" value = { email } onChange = { (e) => setEmail(e.target.value) }></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input id = "signupPassword" type = "password" placeholder = "Password" value = { password } onChange = { (e) => setPassword(e.target.value) }></input>
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input id = "confirmPassword" type = "password" placeholder = "Confirm Password" value = { confirmPassword } onChange = { (e) => setConfirmPassword(e.target.value) }></input>
                    </div>                    
                    <div>
                        <button type = "submit" onClick = {(e) => signupWithUsernameAndPassword(e)}>Registrarse</button>
                    </div>
                    <div>
                        <span>volver a pagina principal<Link to = "/">Click here.</Link></span>
                    </div>                    
                </form>
            </div>
        </div>
  )
}

export default Registrarse
