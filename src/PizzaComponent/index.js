import Pizza from './pizza.png'
import Rabbit from '../ToppingComponent/rabbit.jpg'
import { useState } from 'react'
import ToppingsComponent from "../ToppingComponent";

const PizzaComponent = ({allToppings}) => {

    const [isSpinning, setIsSpinning] = useState(false)

    const [showModal, setShowModal] = useState(false)

    const [randToppings, setRandToppings] = useState([])

    console.log(allToppings)
    const get2RandomToppings = (toppings) => {
        return toppings.sort(() => Math.random() - Math.random()).slice(0, 2)
    }

    const handleClick = () => {

        setIsSpinning(true)
        setRandToppings(get2RandomToppings(allToppings))
        setTimeout(() => {

            setIsSpinning(false)
            setShowModal(true) // Show the modal after the spinning animation finishes
        }, 2000)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <div>
            <div className='bg-blue-200 h-screen flex justify-center items-center'>
                <div className='group relative'>
                    <img
                        onClick={handleClick}
                        className={`h-80 ${isSpinning ? 'animate-spin' : ''}`}
                        alt='pizza image'
                        src={Pizza}
                    />
                    <div className='hidden bg-indigo-500 group-hover:block absolute top-0 left-0 text-white p-2 rounded-lg font-mono'>
                        Click the pizza to display two toppings!
                    </div>
                </div>
                {showModal && (
                    <div className='fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center' onClick={closeModal}>
                        <div className='bg-orange-400 p-4 rounded-lg flex'>
                            {randToppings.map((topping) => <ToppingsComponent topping={topping} />)}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PizzaComponent
