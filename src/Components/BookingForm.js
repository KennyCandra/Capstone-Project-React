import { useState } from "react"
function BookingForm ( {availableTime} , {dispatch}) {

    const [date,setDate] = useState('')
    const [number,setNumber] = useState('')
    const [occasion,setOccasion] = useState('')

    const decrement = (e) => {
        e.preventDefault()
        if (number <= 0 ){
        setNumber(0)
        } else{
        setNumber(number-1)
        }
    }
    
    const increment = (e) => {
        e.preventDefault()
        if (number >= 10){
            setNumber(10)
        } else {
        setNumber(number+1)
        }
    }

    function handleSubmit (e) {
        e.preventDefault()
        alert(`your Resrevation has been successfully completed`)
    }



    const avaliableOptions = availableTime.map((time , index) => {
        return (
            <option key={index}>{time.hour}</option>
        )
    })



    return (
        <>
        <form className="FormInput" onSubmit={handleSubmit}>
    <label for="res-date">Choose date</label>
    <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}>
        </input>
    <label
        for="res-time"
        value={availableTime}
        onChange={() => {
            dispatch(availableTime)
        }}
        >Choose time</label>
    <select id="res-time ">
       {avaliableOptions}
    </select>
    <label for="guests">Number of guests</label>
    <label>{number}</label>
    <button onClick={(e) => {decrement(e)}}>-</button>
    <button onClick={(e) => {increment(e)}}>+</button>
    <label
        value={occasion}
        onChange={(e)=> setOccasion(e.target.value)}
        >Occasion</label>
    <select id="occasion">
       <option>Birthday</option>
       <option>Anniversary</option>
    </select>
    <input type="submit"
        value="Make Your reservation"
        ></input>
 </form>
        </>
    )
}

export default BookingForm