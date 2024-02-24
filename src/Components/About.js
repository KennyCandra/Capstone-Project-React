import restaurantChef from "../assets/photos/restaurant chef B.jpg"

function About () {
    return (
        <main className='About'>
            <section className='About-Container'>
                    <article className='About-Text'>
                        <h1>little Lemon</h1>
                        <h2>Chicago</h2>
                        <div className='About-Paragraph'>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                            Exercitation veniam consequat sunt nostrud amet.
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                        </div>
                    </article>
                    <article>
                        <img src={restaurantChef} alt="PlaceHolder" className="about" id="about1" width="338px" height="276px" ></img>
                        {/* <img src={placeHolderImage} alt="PlaceHolder" className="about" id="about2" width="300px" height="300px"></img> */}
                    </article>
             </section>
        </main>
    )
}

export default About;