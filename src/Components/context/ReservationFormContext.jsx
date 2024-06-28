import { createContext , useState } from "react";

export const reservationFormContext = createContext(null)

const ReservationFormContext = (props) => {
    
    const beforeSelection = {
        occasion : 'Choose Occasion',
        numberOfPeople : 'Choose Number',
        time : 'Choose Time',
        reservationPlace : 'Choose Place'
    }

    const [selected, setSelected] = useState(beforeSelection)

    const values= {selected , setSelected , beforeSelection }

    return <reservationFormContext.Provider value={values}>{props.children}</reservationFormContext.Provider>
}

export default ReservationFormContext