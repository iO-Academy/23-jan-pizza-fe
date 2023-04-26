import './App.css';
import React from 'react'
import { useState } from "react";
import LandingPage from "./LandingPage/Index";
import PizzaComponent from "./PizzaComponent";
import NavbarComponent from "./NavbarComponent";

function App() {

    const [showPizzaComponent, setShowPizzaComponent] = useState(false);

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
            {<PizzaComponent />}
        </div>
    );
}

    export default App;