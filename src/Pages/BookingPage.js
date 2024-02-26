import { useReducer } from "react"
import BookingForm from "../Components/BookingForm"

function BookingPage () {

    const initializedTime =[
        { hour: "17:00" },
        { hour: "18:00" },
        { hour: "19:00" },
        { hour: "20:00" },
        { hour: "21:00" },
        { hour: "22:00" }
]

const updateTimes = () => {
    return availableTime
}


const [availableTime , dispatch] = useReducer(updateTimes,initializedTime)


    return (
        <>
        <BookingForm availableTime={availableTime} dispatch={dispatch}/>
    </>

    )
}

export default BookingPage