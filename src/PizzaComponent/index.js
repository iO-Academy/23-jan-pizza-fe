import Pizza from './pizza.png'

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

export default PizzaComponent
