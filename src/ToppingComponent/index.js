import Images from '../Images/Images'

const ToppingsComponent = ({topping}) => {

const category = () => {
    if (topping.category === 1) {
        return 'Meat'
    } else if (topping.category === 2) {
        return 'Veg'
    } else {
        return 'Cheese'
    }
}


    const addVoteToTopping = async () => {

        try {
            await fetch('http://localhost:9000/toppings', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({id: topping._id})
            }).then((response) => {
                return response.json()
            })
        }
     catch {
        console.log('dont work')
    }}

    return (
        <>
            <div className='flex-col flex justify-center items-center m-4 h-80'>
                <h3 className='font-bold text-center pb-2'>{topping.name}</h3>
                <div>
                    <img className='h-40 w-40 object-fit' alt='toppings-img' src={Images[topping.img]}/>
                </div>
                <p className='text-center pt-3'>{category(topping.category)}</p>
                <button onClick={addVoteToTopping} className='bg-cyan-950 transform: scale-50 hover:bg-red-800 text-white font-bold py-2 px-4
                rounded-full border-white border-4 border-opacity-50 hover:border-black hover:border-opacity-100 shadow w-80 h-40 text-4xl'>Vote</button>
            </div>
        </>
    )
}

export default ToppingsComponent

