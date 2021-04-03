import React from 'react'
import List from '../components/list';
import Search from '../components/search';
import { FunctionalsContent } from '../context/context';

const ReactMemo = () => {
    const { usersState }=React.useContext( FunctionalsContent);
    
    return (
        <div className="react-memo">
            
      <div className="container">
          <div className="row justify-content-center">
          
            <div className="col-md-6">
              <Search/>
            <List usersState={usersState}/>
            </div>
          </div>
        </div>
        </div>
    )
}

export default ReactMemo
