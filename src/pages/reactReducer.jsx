import React from 'react'
import Form  from '../components/form';
import List from '../components/list';
import { FunctionalsContent } from '../context/context';





const ReactReducer = () => {
  const { usersState,usersDispatch}=React.useContext( FunctionalsContent );
 
    return (
     
     
      <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Form actionFunction={{action:'ADD_user',usersDispatch}}/>
            </div>
            <div className="col-md-6">
            <List usersState={usersState}/>
            </div>
          </div>
        </div>
    
    );
}

export default ReactReducer
