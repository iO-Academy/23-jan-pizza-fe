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

    return (
        <>
            <div className='m-4 h-80'>
                <h3 className='font-bold text-center pb-2'>{topping.name}</h3>
                <img  className='h-40 w-40 object-fill' alt='toppings-img' src={Images[topping.img]}/>
                <p className='text-center pt-3'>{category(topping.category)}</p>
            </div>
        </>
    )
}

export default ToppingsComponent

