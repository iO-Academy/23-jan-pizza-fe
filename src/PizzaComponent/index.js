// import Pizza from './pizza.png'
// import Rabbit from './rabbit.jpg'
// import { useState } from 'react'
//
// const PizzaComponent = () => {
//
//     const [isSpinning, setIsSpinning] = useState(false)
//
//     const [showModal, setShowModal] = useState(false)
//
//     const handleClick = () => {
//         setIsSpinning(true)
//         setTimeout(() => {
//             setIsSpinning(false)
//         }, 2000)
//         setShowModal(true)
//     }
//
//
//     const closeModal = () => {
//
//     }
//
//     return (
//         <div>
//             <div className='bg-blue-200 h-screen flex justify-center items-center'>
//                 <div className='group relative'>
//                     <img
//                         onClick={handleClick}
//                         className={`h-80 ${isSpinning ? 'animate-spin' : ''}`}
//                         alt='pizza image'
//                         src={Pizza}
//                     />
//                     <div className='hidden bg-indigo-500 group-hover:block absolute top-0 left-0 text-white p-2 rounded-lg font-mono'>
//                         Click the pizza to display two toppings!
//                     </div>
//                 </div>
//                 <div className='hidden bg-black/70 justify-center items-center'>
//                     <img src={Rabbit} />
//                     <img src={Rabbit} />
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default PizzaComponent


import Pizza from './pizza.png'
import Rabbit from './rabbit.jpg'
import { useState } from 'react'

const PizzaComponent = () => {

    const [isSpinning, setIsSpinning] = useState(false)

    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setIsSpinning(true)
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
                            <img src={Rabbit} className='m-4 h-80' />
                            <img src={Rabbit} className='m-4 h-80' />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PizzaComponent
