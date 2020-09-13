import React from 'react';
import { Button, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = (props) => {
    return (
        <Button variant="outline-primary">
            <FaShoppingCart />
            <span className="btn-text">Carrito</span>
            <Badge variant="danger">{props.count}</Badge>
        </Button>
    )
} 

export default CartIcon;