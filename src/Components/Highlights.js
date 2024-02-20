import greekSalad from "../assets/photos/greek salad.jpg"
import lemonDessert from "../assets/photos/lemon dessert.jpg"
import bruchetta from "../assets/photos/bruchetta.svg"
import deleivery from "../assets/photos/deleivery.png"

function Highlights () {
    return (
        <main>
            <h1>The Week Specials</h1>
            <button>Online Menu</button>
            <div className="Card">
                <div className="Container">
                    <img src={greekSalad} alt="greek salad"></img>
                    <h3>Greek Salad</h3>
                    <p><b>12.99$</b></p>
                    <h4>Order a deleivery</h4>
                    <img src={deleivery} alt="delievery"></img>
                </div>

                <div className="Container">
                    <img src={lemonDessert} alt="lemon dessert"></img>
                    <h3>lemon dessert</h3>
                    <p><b>5.99$</b></p>
                    <h4>Order a deleivery</h4>
                    <img src={deleivery} alt="delievery"></img>
                </div>

                <div className="Container">
                    <img src={bruchetta} alt="bruchetta"></img>
                    <h3>bruchetta</h3>
                    <p><b>5.00$</b></p>
                    <h4>Order a deleivery</h4>
                    <img src={deleivery} alt="delievery"></img>
                </div>
            </div>
        </main>
    )
}

export default Highlights