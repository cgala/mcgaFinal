import { useState } from "react";

const Agregar = () => {

const [titulo, setTitulo] = useState("");
const [snippet, setSnippet] = useState("");
const [cuerpo, setCuerpo] = useState("");

let jsonData = {
            "title": titulo, 
            "snippet": snippet,
            "body": cuerpo
}

function handleClick() {
    try{
      fetch('http://localhost:3000/blogs', {
      method: 'POST', 
      body: JSON.stringify(jsonData),
      headers: {
        "Content-Type": "application/json",
      },
    })
    }catch(error){
        console.log(error)
    }   
  }

const cargarBlogNuevo = (e : any) => {
try {
    console.log(e);
    handleClick();
} catch {
    console.log("hubo un error al cargar el blog");
}     
  
}

  return (
    <div>     
        <div>
            <label >Titulo</label>
            <input id = "Titulo" type = "text" placeholder = "Aca va el titulo" value = { titulo } onChange = { (e) => setTitulo(e.target.value) }></input>
        </div>
        <div>
            <label>Snippet</label>
            <input id = "snippet" type = "text" placeholder = "aca va el snippet" value = { snippet } onChange = { (e) => setSnippet(e.target.value) }></input>
        </div>
        <div>
            <label>Body</label>
            <input id = "Body" type = "text" placeholder = "aca va el body" value = { cuerpo } onChange = { (e) => setCuerpo(e.target.value) }></input>
        </div>                    
        <div>
            <button onClick ={(e) => cargarBlogNuevo(e)}>Agregar</button>
        </div>                   
    </div>
  )
}

export default Agregar
