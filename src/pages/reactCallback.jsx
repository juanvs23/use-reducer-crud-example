import React from 'react'
import EditForm  from '../components/editform';
import List from '../components/list';
import { useLocation} from 'react-router-dom'
import { FunctionalsContent } from '../context/context';
function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
const ReactCallback = () => {
    const { usersState,usersDispatch,setTitleName}=React.useContext( FunctionalsContent );
    React.useEffect(()=>{
        setTitleName('Editar usuario')
  })
    
    let query = useQuery()
    
    let userChange=usersState.users.filter(user=>(user.id===parseInt(query.get('id'))))
    
    return (
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <EditForm  userChange={userChange} actionFunction={{action:'ADD_user',usersDispatch}}/>
          </div>
          <div className="col-md-6">
          <List usersState={usersState}/>
          </div>
        </div>
      </div>
    )
}

export default ReactCallback
