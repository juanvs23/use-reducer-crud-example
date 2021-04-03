import React from 'react'

const EditForm = ({actionFunction,userChange}) => {
const [editUser,setEditUser]=React.useState(userChange[0])
  
    React.useEffect(()=>{
        console.log('render form');
    })
    
    const handlerChange=(e)=>{
      setEditUser({
        ...editUser,
        [e.target.name]:e.target.value
      })
    }


    const handlerSubmit= (e)=>{
      e.preventDefault();
      actionFunction.usersDispatch({
          type:'EDIT_USER',
          payload:editUser
        }) 
    }
    return (
        <div className="form__component">
            <h3 className="display-5">formulario</h3>
            <form onSubmit={handlerSubmit} >
    <div className="mb-3">
      <label htmlFor="nombre" className="form-label">Nombre</label>
      <input type="text" name="nombre" className="form-control"  onChange={handlerChange}  defaultValue={editUser.nombre} id="nombre" aria-describedby="emailHelp" placeholder="Nombre" />
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="correo" className="form-label">Correo</label>
      <input type="email" onChange={handlerChange} defaultValue={editUser.correo} name="correo" className="form-control" id="correo" />
    </div>
    <div className="mb-3 ">
    <label htmlFor="edad"  className="form-label">Edad</label>
      <input type="text" name="edad" defaultValue={editUser.edad} onChange={handlerChange} className="form-control" id="edad" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
        </div>
    )
}

export default EditForm
