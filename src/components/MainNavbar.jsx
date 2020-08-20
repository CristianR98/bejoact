import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';

class MainNavbar extends React.Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Bejoact</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-info">Carrito</Button>
                </Form>
            </Navbar>
        )
    }
}

export default MainNavbar;