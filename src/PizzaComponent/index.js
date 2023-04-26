import Pizza from './pizza.png'
import React, {useState} from "react";

const handleClick = () => {

}

const PizzaComponent = () => {
    return (
        <div>
            <div className='bg-blue-200 h-screen flex justify-center items-center'>
                <div className='group relative'>
                    <img onClick={handleClick} className='h-80' alt='pizza image' src={Pizza} />
                    <div className='hidden bg-indigo-500 group-hover:block absolute top-0 left-0 text-white p-2 rounded-lg font-mono'>
                        Click here to spin the pizza to display two toppings!
                    </div>
                </div>
            </div>
        </div>
    )
}

const ToppingsComponent = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <button onClick={handleShowModal}>Show Toppings</button>
            <div id="instructionModal" style={{display: showModal ? 'block' : 'none'}}>
                <div className="modal-content">
                    <span id="toppingsModalClose" className="close" onClick={handleCloseModal}>&times;</span>
                    <div id="toppings">
                        <h2>Toppings</h2>
                        <p>Choose your toppings here</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PizzaComponent
