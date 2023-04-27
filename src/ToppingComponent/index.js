import Rabbit from './rabbit.jpg'

const ToppingsComponent = ({topping}) => {




    return (
        <>
        {/*<img src={Rabbit} alt='rabbit' className='m-4 h-80'/>*/}
            <div className='m-4 h-80'>
                <h3>{topping.name}</h3>
                <img  className='h-40' src={topping.img}/>
                <p> Category: {topping.category}</p>
            </div>
        </>
    )

}

export default ToppingsComponent