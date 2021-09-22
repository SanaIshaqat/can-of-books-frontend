import React from 'react';
import { Navbar, NavItem, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
// import './header.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import BestBooks from './BestBooks';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
          
         
          <>
          <LogoutButton/>
          
          {/* <BestBooks/> */}
        
          </>
          <LoginButton/>
         
     
      </Navbar>
    )
  }
}

export default Header;
