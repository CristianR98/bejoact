import React from 'react';

const Home = (props) => {
    return (   
        <div className="home-container">
            <header className="main-header">
                <h1>{props.greeting}</h1>
                <p>{props.subtitle}</p>
            </header>
        </div>
    )
}

export default Home;