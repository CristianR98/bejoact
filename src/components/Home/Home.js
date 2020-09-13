import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Home.css';
import catalog from '../../catalog.json';

class Home extends React.Component {

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

    render () {
        return (   
            <div className="home-container">
                <header className="main-header">
                    <h1>{this.props.greeting}</h1>
                    <p>{this.props.subtitle}</p>
                </header>
                <div className="product-container row">
                    {this.state.products.map(product => 
                        <div className="col-md-4">
                            <ProductCard product={product}/>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Home;