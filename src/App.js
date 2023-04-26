import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage/Index';
import PizzaComponent from './PizzaComponent';
import NavbarComponent from './NavbarComponent';

function App() {
    const [toppings, setToppings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/toppings')
            .then((response) => response.json())
            .then((data) => setToppings(data));
    }, []);

    return (
        <div className="App">
            {/* <LandingPage /> */}
            <NavbarComponent />
            <PizzaComponent toppings={toppings} />
        </div>
    );
}

export default App;
