import { createContext , useState } from "react";

export const reservationFormContext = createContext(null)

const ReservationFormContext = (props) => {
    
    const [selected, setSelected] = useState({
        occasion : 'Choose Occasion',
        numberOfPeople : 'Choose Number',
        time : 'Choose Time',
        reservationPlace : 'Choose Place'
    })

    const values= {selected , setSelected }

    return <reservationFormContext.Provider value={values}>{props.children}</reservationFormContext.Provider>
}

export default ReservationFormContext