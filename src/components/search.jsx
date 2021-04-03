import React from 'react'
import { FunctionalsContent } from '../context/context';

const Search = () => {
    const {usersDispatch}=React.useContext(FunctionalsContent);
    const search=React.createRef();

const handleSearch=()=>{
    
     
       
    
     usersDispatch({
           type:'LIST_USER',
           payload:search.current.value
         }) 
       
 
}

    return (
        <div className="search">
            <div className="mb-3 input-group">
  <input type="text" className="form-control" onChange={handleSearch} placeholder="Recipient's username" ref={search} aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  
</div>
        </div>
    )
}

export default Search
