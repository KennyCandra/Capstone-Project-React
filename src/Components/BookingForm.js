import { useState } from "react"
function BookingForm () {

    const [date,setDate] = useState('')
    const [number,setNumber] = useState('')
    const [occasion,setOccasion] = useState('')
    const [time,setTime] = useState('')

    function handleSubmit (e) {
        e.preventDefault()
        alert(`your Resrevation has been successfully completed`)
    }

    const availableTimes = [
        {hour : "17:00"},
        {hour : "18:00"},
        {hour : "19:00"},
        {hour : "20:00"},
        {hour : "21:00"},
        {hour : "22:00"}
    ]

    const avaliableOptions = availableTimes.map((time , index) => {
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
        value={time}
        onChange={(e) => setTime(e.target.value)}
        >Choose time</label>
    <select id="res-time ">
       {avaliableOptions}
    </select>
    <label for="guests">Number of guests</label>
    <input
        value={number}
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={(e) => setNumber(e.target.value)}
        ></input>
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