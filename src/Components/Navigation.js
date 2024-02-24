import  logo from "../assets/photos/logo.svg"


function Navigation () {
    return (
        <div className="navigation">
            <nav>
                <img src={logo} alt='logo' className="logo" width={"148px"} height={"40px"} ></img>
                <ul className="Nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservation</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation