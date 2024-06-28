import { createContext , useEffect, useState } from "react";

export const reservationFormContext = createContext(null)

const ReservationFormContext = (props) => {


    const [reservation , setReservation] = useState([])
    const beforeSelection = {
        occasion : 'Choose Occasion',
        numberOfPeople : 'Choose Number',
        time : 'Choose Time',
        reservationPlace : 'Choose Place'
    }

    const [selected, setSelected] = useState(beforeSelection)

    useEffect(() => {
        const reservations = JSON.parse(localStorage.getItem("reservations"));
        if (reservation) {
          setReservation(reservation);
        }
      }, []);

      
      useEffect(() => {
        localStorage.setItem("reservations", JSON.stringify(reservation));
        
})


    const values= {selected , setSelected , beforeSelection , reservation , setReservation }

    return <reservationFormContext.Provider value={values}>{props.children}</reservationFormContext.Provider>
}

export default ReservationFormContext