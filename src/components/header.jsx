import React from 'react';
import logo from '../logo.svg';
import LinksContainer from './links';
import {Navbar,Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FunctionalsContent } from '../context/context';


const HeaderComponent = () => {
  const {setTitleName} = React.useContext(FunctionalsContent)
  const changeTitle=()=>{
    setTitleName('Home')
}
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>

        
      <Navbar.Brand as={Link} onClick={changeTitle}  to="/"><img src={logo} width="50" height="50" alt="testings" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end d-lg-flex">
        <Nav className="justify-content-end d-lg-flex">
        <LinksContainer classList="d-lg-flex flex-row" />
         
        </Nav>
       
      </Navbar.Collapse>
      </Container>
    </Navbar>




    )
}

export default HeaderComponent
