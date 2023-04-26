
import './App.css';
import React from 'react'
import LandingPage from ".//LandingPage/Index";
import PizzaComponent from "./PizzaComponent";
import NavbarComponent from "./NavbarComponent";

function App() {
  return (
    <div className="App">
        {/*<LandingPage />*/}
        <NavbarComponent />
        <PizzaComponent />
    </div>
  );
}

export default App;

