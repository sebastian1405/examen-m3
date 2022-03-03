import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Container,  Navbar } from 'react-bootstrap';

function NavB({onSearch}) {
  return (
    <>
      <Navbar  bg="dark" expand="lg">
  <Container fluid >
   <div className='logo-app'>
      <img src={Logo} alt="logo" height={40}></img>
    <Navbar.Brand href="#" className='text-light'>Henry - Weather App</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
   </div>
   
    <div className='search'>
      <Navbar.Collapse id="navbarScroll">
        <SearchBar onSearch={onSearch}/>
      {/* <Form className="d-flex">
        
        <FormControl
          type="search"
          placeholder="Ciudad"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Agregar</Button>
      </Form> */}
    </Navbar.Collapse>
    </div>
  </Container>
</Navbar>
    </>
  );
};

export default NavB;
