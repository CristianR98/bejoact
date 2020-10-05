import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import catalog from '../../catalog.json'
import ProductCard from '../ProductCard/ProductCard';

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    useEffect(() => {
        let productPromise = new Promise(resolve => {
            setTimeout(() => {
                resolve(catalog[0]);
            }, 3000);
        });
        productPromise.then(resolvedProduct => {
            setProduct(resolvedProduct);
            setLoading(false);
        });
        return () => {
            console.log('Will unmount!');
        }
    }, []);
    
    if (loading) {
        return (
            <div className="w-100">
                <Spinner animation="border" variant="primary" style={{margin: 'auto', display: 'block'}}/>
            </div>
        )
    }
    return (
        <ProductCard product={product} fullWidth={true}/>
    )
}

export default ItemDetailContainer;