import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage/Index';
import PizzaComponent from './PizzaComponent';
import NavbarComponent from './NavbarComponent';

function App() {
    const [allToppings, setAllToppings] = useState([]);
    const [showPizzaComponent, setShowPizzaComponent] = useState(false);

    useEffect(() => {
        fetch('http://localhost:9000/toppings')
            .then((response) => response.json())
            .then((response) => setAllToppings(response.data));
    }, []);

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
            {/*{showPizzaComponent && <PizzaComponent randToppings={get2RandomToppings(allToppings)} />}*/}
            {showPizzaComponent && <PizzaComponent allToppings={allToppings} />}
        </div>
    );
}

export default App;
