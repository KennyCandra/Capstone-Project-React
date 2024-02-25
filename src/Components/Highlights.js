import greekSalad from "../assets/photos/greek salad.jpg"
import lemonDessert from "../assets/photos/lemon dessert.jpg"
import bruchetta from "../assets/photos/bruchetta.svg"
import deleivery from "../assets/photos/deleivery.png"

function Highlights () {

    const highLights = [
        {
            img: greekSalad,
            heading: 'Greek Salad',
            price: '12.99$',
            description: 'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
            delivery: 'Order a Delivery',
            imgDelivery: deleivery
        },
        {
            img: lemonDessert,
            heading: 'Lemon Dessert',
            price: '5.99$',
            description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
            delivery: 'Order a Delivery',
            imgDelivery: deleivery
        },
        {
            img: bruchetta,
            heading: 'Bruchetta',
            price: '5.00$',
            description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
            delivery: 'Order a Delivery',
            imgDelivery: deleivery
        }
    ];

    return (
        <main className="section highlights">
            <div className ='highlightsHeader'>
                <h1>The Week Specials</h1>
                <button className ="BTN highlightBTN">Online Menu</button>
            </div>
            <div className="Container">
            {highLights.map((item, index) => (
                    <div key={index} className="Card">
                        <div className='cardImgDiv'>
                            <img src={item.img}
                                alt={item.heading}
                                width="264px"
                                height="185px"
                                className="cardImg"
                            />
                        </div>
                        <div className='FoodInfo'>
                            <h3>{item.heading}</h3>
                            <p><b>{item.price}</b></p>
                        </div>
                        <div className='paragraph'>
                            <p className='foodDes'>{item.description}</p>
                        </div>
                        <div className='deleivery'>
                            <h4>{item.delivery}</h4>
                            <img src={item.imgDelivery}
                                alt="Delivery"
                                width="17px"
                                height="10px"
                            />
                        </div>
                    </div>
                ))}

            </div>
        </main>
    )
}

export default Highlights