import placeHolderImage from "../assets/photos/place holder.jpg"

function About () {
    return (
        <main>
            <h1>little Lemon</h1>
            <h2>Chicago</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                Exercitation veniam consequat sunt nostrud amet.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            <img src={placeHolderImage} alt="PlaceHolder" className="about" id="about1"></img>
            <img src={placeHolderImage} alt="PlaceHolder" className="about" id="about2"></img>
        </main>
    )
}

export default About;