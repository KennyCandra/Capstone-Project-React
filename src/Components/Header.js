import Chef from '../assets/photos/restauranfood.jpg'

function Header () {
    return (
    <header>
        <div className='header'>
                <div className='headerText'>
                    <div>
                        <h1 id='name'>Little Lemon</h1>
                        <h2 id='place'>Chicago</h2>
                            <p id='description'>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut
                              labore et dolore magna aliqua.</p>
                    <div className='btnDiv'>
                        <button className="BTN" type='submit'>Reserve a Table</button>
                    </div>
                </div>
                </div>
        
                <div className='headerImg'>
                    <img src={Chef} alt='food' id='foodImg' width="375px" height="375px"></img>
                </div>
        </div>
    </header>
    )
}

export default Header;