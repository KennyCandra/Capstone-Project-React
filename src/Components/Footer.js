import placeHolderImage from "../assets/photos/place holder.jpg"

function Footer () {
    return (
        <footer>
            <img src={placeHolderImage} alt="logo"></img>
            <div>
                <h3>Doormat Navigation</h3>
                <ul className="Nav-Footer">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservation</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>

            <div>
                <h3>Contact</h3>
                <ul className="Nav-Footer">
                    <li><a href="#">Adress</a></li>
                    <li><a href="#">Phone Number</a></li>
                    <li><a href="#">Email</a></li>
                </ul>
            </div>

            <div>
                <h3>Contact</h3>
                <ul className="Nav-Footer">
                    <li><a href="#">Adress</a></li>
                    <li><a href="#">Phone Number</a></li>
                    <li><a href="#">Email</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;