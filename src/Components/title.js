import logo from "../assets/photos/logo.svg"

function Title () {
    return (
        <title>
                <meta name="description" content="Local Restaurant in Chicago"/>
                <meta name="og:title" content="Little Lemon Restaurant"/>
                <meta name="og:description" content="Local Restaurant in Chicago"/>
                <meta name="og:image" content={logo}/>
        </title>
    )
}

export default Title