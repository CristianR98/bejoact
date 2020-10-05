import React from 'react';
import './Home.css';
import ItemList from '../ItemList/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

class Home extends React.Component {

    render () {
        return (   
            <div className="home-container">
                <header className="main-header">
                    <h1>{this.props.greeting}</h1>
                    <p>{this.props.subtitle}</p>
                </header>
                {/* <ItemList/> */}
                <div className="container">
                    <ItemDetailContainer/>
                </div>
            </div>
        )
    }
}

export default Home;