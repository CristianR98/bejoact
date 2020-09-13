import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Home.css';

const Home = (props) => {
    return (   
        <div className="home-container">
            <header className="main-header">
                <h1>{props.greeting}</h1>
                <p>{props.subtitle}</p>
            </header>
            <div class="product-container">
                <ProductCard/>
            </div>
        </div>
    )
}

export default Home;