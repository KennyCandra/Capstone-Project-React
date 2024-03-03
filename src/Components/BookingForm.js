import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function BookingForm({ availableTime, dispatch }) {
  const [number, setNumber] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");

  const formik = useFormik({
    initialValues: {
      user: "",
      phone: "",
    },
    onSubmit: async (values, { resetForm }) => {
        alert(`Your form has been submitted successfully ${values.user}`)
        resetForm();
    },
    validationSchema: Yup.object({
      user: Yup.string().required("Required").min(3, "Please enter valid name"),
      phone: Yup.string()
        .required("Required")
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(11, "Must be 11 digits")
        .max(11, "Must be 11 digits"),
    }),
  });



  const decrement = (e) => {
    e.preventDefault();
    if (number <= 1) {
      setNumber(1);
    } else {
      setNumber(number - 1);
    }
  };

  const increment = (e) => {
    e.preventDefault();
    if (number >= 10) {
      setNumber(10);
    } else {
      setNumber(number + 1);
    }
  };    

  const availableOptions = availableTime.map((time, index) => (
    <option key={index}>{time.hour}</option>
  ));

  return (
    <>
      <form className="FormInput" onSubmit={formik.handleSubmit}>
        <label htmlFor="res-name">Your Name:</label>
        <input
          htmlFor='user'
          name="user"
          id="res-name"
          type="text"
          {...formik.getFieldProps("user")}
          style={{border: formik.errors.user ? "1px solid red" : null}}
        />
        {formik.touched.user && formik.errors.user && (
          <span style={{color : 'red'}}>{formik.errors.user}</span>
        )}

        <label htmlFor="res-phone">Your Phone</label>
        <input
          htmlFor='phone'
          type="tel"
          id="res-phone"
          {...formik.getFieldProps("phone")}
          placeholder="Your number"
          style={{border: formik.errors.user ? "1px solid red" : null}}
        />
        {formik.touched.phone && formik.errors.phone && (
          <span style={{color : 'red'}}>{formik.errors.phone}</span>
        )}

        <label htmlFor="res-date">Choose date</label>
        <input 
          htmlFor='date'
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" onChange={() => dispatch(availableTime)}>
          {availableOptions}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <label>{number}</label>
        <button onClick={(e) => decrement(e)}>-</button>
        <button onClick={(e) => increment(e)}>+</button>

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Dinner</option>
        </select>

        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
}

export default BookingForm;
