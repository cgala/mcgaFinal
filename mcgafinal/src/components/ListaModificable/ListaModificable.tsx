import { useEffect, useState } from 'react'
import Blog from '../../models/blog'
import './ListaModificable.css'

const ListaModificable = () => {
const [blogs, setBlogs] = useState<Blog[]>([])
const [notice, setNotice] = useState("");
const [titulo, setTitulo] = useState("");
const [snippet, setSnippet] = useState("");
const [cuerpo, setCuerpo] = useState("");
const [idModificar, setIdModificar] = useState("");

let jsonData = {
  "title": titulo, 
  "snippet": snippet,
  "body": cuerpo
}

useEffect(()=>{
      const getBlogs = async () => {
      const blogsFromServer = await fetchBlogs()
      setBlogs(blogsFromServer)
    }
    getBlogs();
  },[])

async function fetchBlogs() {
    const res = await fetch('http://localhost:3000/blogs')
    const data = await res.json()
    return data
}

const borrarcito = function(e : any){
  handleClick(e)
}

function handleClick(e : string) {
  try{
    let id = e;
    fetch('http://localhost:3000/blogs/' + id, {
    method: 'DELETE',
  })
  }catch(error){
      console.log(error)
  }   
}

const updatecito = function(e : any){
  let id = e;
  setIdModificar(id);
  setNotice("Modificar blog")
}

function handleClick2(e : any) {
  try{
    let id = e;
    fetch('http://localhost:3000/blogs/' + id, {
    method: 'PUT', 
    body: JSON.stringify(jsonData),
    headers: {
      "Content-Type": "application/json",
    },
  })
  }catch(error){
      console.log(error)
  }   
}

const cargarBlogModificado = (e : any) => {
try {
  e = idModificar
  handleClick2(e)
  setNotice("")
} catch {
  console.log("hubo un error al modificar el blog");
}     
}

return (
    <div>
        { "" === notice && 
        <div>
        <h3>Listado de Blogs</h3>
        <table id="tabla">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Snippet</th>
            <th>Cuerpo</th>
            <th>Accion</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
            {blogs.map( blog =>(
              <tr key={blog.title}>                
                <td>{blog.title}</td>
                <td>{blog.snippet}</td>
                <td>{blog.body}</td>
                <td><button onClick={() => updatecito(blog._id)}>MODIFICAR</button></td>
                <td><button onClick={() => borrarcito(blog._id)}>BORRAR</button></td>
              </tr>
            ))}
        </tbody>
        </table>     
        </div>}
        { "" !== notice && 
        <div >
          <h3>{notice}</h3>
          <h5>{idModificar}</h5>
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
            <button onClick ={(e) => cargarBlogModificado(e)}>Modificar</button>
          </div>     
        </div>} 
    </div>
  )
}

export default ListaModificable
