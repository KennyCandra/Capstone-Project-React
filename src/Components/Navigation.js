import  logo from "../assets/photos/logo.svg"
import { Routes , Route, Link } from 'react-router-dom';


function Navigation () {
    return (
        <div className="navigation">
            <nav>
                <img src={logo} alt='logo' className="logo" width={"148px"} height={"40px"} ></img>
                <ul className="Nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/reservation'>Reservation</Link></li>
                    <li><Link to='/order-online'>Order Online</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation