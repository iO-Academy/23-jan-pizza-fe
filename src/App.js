import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage/Index';
import PizzaComponent from './PizzaComponent';
import NavbarComponent from './NavbarComponent';

function App() {
    const [toppings, setToppings] = useState([]);
    const [showPizzaComponent, setShowPizzaComponent] = useState(false);

    useEffect(() => {
        fetch('http://localhost:9000/toppings')
            .then((response) => response.json())
            .then((data) => setToppings(data));
    }, []);

    console.log(toppings)

    const handleKeyPress = () => {
        setShowPizzaComponent(true);
    }

    return (
        <div className="App" onClick={handleKeyPress}>
            {!showPizzaComponent && (
                <>
                    <LandingPage/>
                </>
            )}
            {showPizzaComponent && <NavbarComponent />}
            {showPizzaComponent && <PizzaComponent toppings={toppings} />}
        </div>
    );
}

export default App;
