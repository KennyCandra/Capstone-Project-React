import { useState } from 'react'
import './FormInput.css'

const FormInput = (props) => {

    const [focused,setFocused] = useState(false)
    const {ErrorMessage , label , handleChange , ...inputValues} = props

    const handleBlur = () => {
        setFocused(true)
    }

    return(
        <div className='container'>
            <div className="form-input">
                <label>{label}</label >
                <input  {...inputValues}
                    onBlur={handleBlur}
                    focused={focused.toString()} />
                <span>{ErrorMessage}</span>
            </div>
        </div>
    )
}

export default FormInput