import React from 'react'

const Form = ({actionFunction}) => {
    React.useEffect(()=>{
        console.log('render form');
    })
    const nombre= React.createRef();
    const edad= React.createRef();
    const email= React.createRef();
    const handlerSubmit= (e)=>{
      e.preventDefault();
     const date =Date.now()
      let newUser={
          id: date,
        nombre:nombre.current.value,
        edad:edad.current.value,
        correo:email.current.value
      }
     switch (actionFunction.action) {
         case 'ADD_user':
            actionFunction.usersDispatch({
                type:'ADD_USER',
                payload:newUser
              })
             break;
     
         default:
             break;
     }
     
    }
    return (
        <div className="form__component">
            <h3 className="display-5">formulario</h3>
            <form onSubmit={handlerSubmit} >
    <div className="mb-3">
      <label htmlFor="nombre" className="form-label">Nombre</label>
      <input type="text" name="nombre" className="form-control" id="nombre" ref={nombre} aria-describedby="emailHelp" placeholder="Nombre" />
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Correo</label>
      <input type="email" ref={email}  name="email" className="form-control" id="email" />
    </div>
    <div className="mb-3 ">
    <label htmlFor="edad"  className="form-label">Edad</label>
      <input type="text" name="edad" ref={edad} className="form-control" id="edad" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
        </div>
    )
}

export default Form
