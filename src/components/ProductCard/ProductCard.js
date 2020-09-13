import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProductCard.css';

class ProductCard extends React.Component {

    state = {
        itemCount: 0,
        stock: 5
    }

    addProduct() {
        if (this.state.itemCount < this.state.stock) {
            this.setState(state => ({itemCount: state.itemCount + 1}));
        }
    }

    substractProduct() {
        if (this.state.itemCount > 0) {
            this.setState(state => ({itemCount: state.itemCount - 1}));
        }
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/400/200" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <p class="stock">Stock: {this.state.stock}</p>
                    <div class="product-actions">
                        <Button variant="primary" onClick={this.addProduct.bind(this)} >+</Button>
                        <span class="item-count">{this.state.itemCount}</span>
                        <Button variant="primary" onClick={this.substractProduct.bind(this)}>-</Button>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

export default ProductCard;