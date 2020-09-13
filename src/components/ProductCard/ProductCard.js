import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProductCard.css';

class ProductCard extends React.Component {

    state = {
        itemCount: 0,
    }

    addProduct() {
        if (this.state.itemCount < this.props.product.stock) {
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
                    <Card.Title>{this.props.product.name}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <p className="price">$ {this.props.product.price}</p>
                    <p className="stock">Stock: {this.props.product.stock}</p>
                    <div className="product-actions">
                        <Button variant="primary" onClick={this.addProduct.bind(this)} >+</Button>
                        <span className="item-count">{this.state.itemCount}</span>
                        <Button variant="primary" onClick={this.substractProduct.bind(this)}>-</Button>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

export default ProductCard;