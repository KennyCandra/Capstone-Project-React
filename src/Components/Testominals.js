import placeHolderImage from "../assets/photos/place holder.jpg"

function Testiominals () {
    return (
        <div className="back-ground">
            <h1>Testiominals</h1>
            <div>
                <div className="container-Testiominals">
                    <div>
                        <h3>Rating</h3>
                        <div className="Info">
                            <h3>Name</h3>
                            <img src={placeHolderImage} alt="Place Holder" ></img>
                        </div>
                        <p>Review Text</p>
                    </div>
                    <div>
                        <h3>Rating</h3>
                        <div className="Info">
                            <h3>Name</h3>
                            <img src={placeHolderImage} alt="Place Holder" ></img>
                        </div>
                        <p>Review Text</p>
                    </div>
                    <div>
                        <h3>Rating</h3>
                        <div className="Info">
                            <h3>Name</h3>
                            <img src={placeHolderImage} alt="Place Holder" ></img>
                        </div>
                        <p>Review Text</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testiominals