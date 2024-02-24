import placeHolderImage from "../assets/photos/place holder.jpg"

function Testiominals () {
    const card = () =>  { return(
        <div className="Test-card">
            <div className='rating'>
            <h3>Rating</h3>
        </div>
        <div className='Test-info'>
        <img src={placeHolderImage}
            alt="Place Holder"
            width="47px"
            height="46px"></img>
            <h3>Name</h3>
        </div>
        <div className='review'>
        <p>Review Text</p>
        </div>
    </div>
    )}

    const cardComponents = Array.from({ length: 4 }, (_, index) => (
        <div key={index}>
            {card()}
        </div>
    ));
    return (
        <div className="back-ground">
            <div className='Test-Name'>
                <h1 id='testiominals'>Testiominals</h1>
            </div>
            <div className="Test-container">
                 {cardComponents}
            </div>
        </div>
    )
}

export default Testiominals