import React from 'react';
import { Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = () => {
    return (
        <Button variant="outline-primary">
            <FaShoppingCart />
            <span className="btn-text">Carrito</span>
        </Button>
    )
} 

export default CartIcon;