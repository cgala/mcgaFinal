import { useEffect, useState } from "react";
import './ListaBlogs.css'
import blog from "../../models/blog";

const ListaBlogs = () => {
const[blogs, setBlogs] = useState([])

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

const traerTodos = function() {
  return blogs as Array<blog>
}

const cualquiera : Array<blog> = traerTodos()

  return (
    <div>
      <h3>Listado de Alumnos</h3>
      <table id="customers">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Snippet</th>
            <th>Cuerpo</th>
          </tr>
        </thead>
        <tbody>
            {cualquiera.map( blog =>(
              <tr key={blog.title}>
                <td>{blog.title}</td>
                <td>{blog.snippet}</td>
                <td>{blog.body}</td>
              </tr>
              ))}
        </tbody>
      </table>     
    </div>
  )
}

export default ListaBlogs
