import React from 'react'
import { NavLink } from 'react-router-dom';
import {Nav} from 'react-bootstrap'
import { routes } from '../routes/index';
import { FunctionalsContent } from '../context/context';

const LinksContainer = ({classList,classChildren}) => {
    const {setTitleName} = React.useContext(FunctionalsContent)
    return (
        <div className={classList}>
            {
            routes.map(function(route,i){
              if (!route.link) return null;
                const changeTitle=()=>{
                  setTitleName(route.link)
                }
            return <Nav.Link  activeClassName="active" key={i} onClick={changeTitle} className={classChildren}  as={NavLink} to={route.path}>{route.link}</Nav.Link>  
            })
          } 
        </div>
    )
}

export default LinksContainer
