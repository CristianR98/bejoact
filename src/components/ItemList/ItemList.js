import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import catalog from '../../catalog.json';

class ItemList extends React.Component {

    state = {
        products: []
    };

    componentDidMount() {
        let productRequest = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(catalog);
            }, 2000);
        });
        productRequest
        .then(catalog => {
            this.setState(state => ({products: catalog}));
        });
    }

    render() {
        return (
            <div className="product-container row">
                {this.state.products.map(product => 
                    <div className="col-md-4">
                        <ProductCard product={product}/>
                    </div>
                )}
            </div>
        )
    }

}

export default ItemList;