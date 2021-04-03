import React, { useContext } from 'react'
import { FunctionalsContent } from '../context/context'
import {NavLink} from 'react-router-dom'


/*memo solo es conveniente utilizarlo solo cuando el contenido por su peso o tamaño puede relentizar la carga del componente
//ejemplo:

1. Listados muy largos.
2. Funciones de carga con ajax.
3. Carga de contenido con fetch.
*/
const List =({usersState}) => {
   const {usersDispatch}=useContext(FunctionalsContent);
   const handlerDelete=(id)=>{
    usersDispatch({
      type:'Delete_USER',
      payload:id
    })
   }
    return (
     <div className="list__component">
         <h3 className="display-5">Listado</h3>
            <ol className="list-group">
          
          { usersState.users.map((user,i)=>{
            return(
              <li key={i} className="list-group-item">
                <div className="row">
                <div className="col-8">
                <b>Nombre:</b> {user.nombre} <br/>
                <b>Edad:</b> {user.edad} <br/>
                <b>Correo:</b> {user.correo} <br/>
                </div>
                <div className="col-4 justify-content-center">
                  <div className="mt-3 btn-group">
                  <button className="btn btn-danger" onClick={()=>handlerDelete(user.id)}><i className="bi bi-x-circle"></i></button>
                  
                  <NavLink className="btn btn-warning" to={`/react-callback?id=${user.id}`}><i className="bi bi-pencil-square"></i></NavLink>
                  </div>
                  
                </div>
                </div>
              </li>
            )
           }
           )}
           </ol>
     </div> 
    )
}

export default List

