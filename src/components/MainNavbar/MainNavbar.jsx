import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CartIcon from '../CartIcon/CartIcon';
import style from 'bootstrap/dist/css/bootstrap.css';

class MainNavbar extends React.Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Bejoact</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
                <CartIcon/>
            </Navbar>
        )
    }
}

export default MainNavbar;