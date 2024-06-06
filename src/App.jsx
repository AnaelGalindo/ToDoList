import { useState } from 'react'
import './App.css' 



export default function App(){

const [arregloTareas, setArregloTareas] = useState([])

const agregarTarea = () => {
  const nuevaTarea = {id: crypto.randomUUID(), tarea: document.querySelector('input').value, completada: false}
  setArregloTareas([nuevaTarea, ...arregloTareas])
}

const eliminarTarea = (id) =>{
  const nuevoArreglo = arregloTareas.filter(item => item.id != id)
  setArregloTareas(nuevoArreglo)  
}

const actualizarTarea = (id) =>{
  const tareaActualizada = arregloTareas.find(item => item.id == id)
  tareaActualizada.completada = !tareaActualizada.completada
  setArregloTareas([...arregloTareas])
  console.log(tareaActualizada)
}
 
return(
    <div>
      <h1>ToDo List</h1>
      <input/>
      <button onClick={agregarTarea}>Agregar Tarea</button>
      <ul>
        {
          arregloTareas.map( item =>{
            return <li key={item.id}>
              <p 
                onClick={() => actualizarTarea(item.id)}
                className={item.completada ? 'checada' : ''}
                >{item.tarea}</p>
              <button onClick={() => eliminarTarea(item.id)}>X</button>
              </li>
          })
          
        }

      </ul>
    </div>
 )
}