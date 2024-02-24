import placeHolderImage from "../assets/photos/Logo .svg"

function Footer () {
    return (
        <footer>
                <img src={placeHolderImage} alt="logo" width="162px" height="279px" id='footerimg'></img>
                `<div className='Doormat-Navigation'>
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

                <div className='contact1'>
                    <h3>Contact</h3>
                    <ul className="Nav-Footer">
                        <li><a href="#">Adress</a></li>
                        <li><a href="#">Phone Number</a></li>
                        <li><a href="#">Email</a></li>
                    </ul>
                </div>

                <div className='contact2'>
                    <h3>Social Media Links</h3>
                    <ul className="Nav-Footer">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
        </footer>
    )
}

export default Footer;