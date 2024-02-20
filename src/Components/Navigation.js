import  logo from "../assets/photos/logo.svg"


function Navigation () {
    return (
        <nav>
            <img src={logo} alt='logo'></img>
            <ul className="Nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservation</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    )
}

export default Navigation