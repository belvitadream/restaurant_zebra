import { useEffect, useState } from 'react'
import { events } from '../components/data'
import ThankYou from './ThankYou'
import { db } from '../firebase'

const BookingForm = ({
  stylesForm,
  stylesFormContainer,
  stylesFormItem,
  stylesFormButton,
}) => {
  const [reservation, setReservation] = useState({
    date: '',
    time: '',
    amount: 0,
    name: '',
    email: '',
    event: '',
    phone: '',
  })
  const [reservations, setReservations] = useState([])
  const [formSubmitionStatus, setFormSubmitionStatus] = useState('notSubmitted')
  const [list_events, setEvents] = useState([])

  useEffect(() => {
    const list = events.map((event) => event.name)
    setEvents(list)
  }, [])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setReservation({ ...reservation, [name]: value })
    console.log(name, value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      reservation.date &&
      reservation.time &&
      reservation.amount &&
      reservation.name &&
      reservation.email &&
      reservation.phone
    ) {
      const newReservation = {
        ...reservation,
        id: new Date().getTime().toString(),
      }

      // ADDING TO DATABASE
      db.collection('reservations').add({
        date: reservation.date,
        time: reservation.time,
        amount: reservation.amount,
        name: reservation.name,
        email: reservation.email,
        phone: reservation.phone,
        event: reservation.event,
      })

      setReservations([...reservations, newReservation])
      setReservation({
        date: '',
        time: '',
        amount: 0,
        name: '',
        email: '',
        event: '',
        phone: '',
      })

      setFormSubmitionStatus('submitted')
    }
  }

  const form = (
    <div className={`bookingForm ${stylesForm}`}>
      <h4>You need a reservation for today? </h4>
      <h4>Please call us +48 999 999 999</h4>
      <form className={`form ${stylesFormContainer}`}>
        <div className={`form-position ${stylesFormItem}`}>
          <label htmlFor='name'>Name:</label>
          <input
            required
            type='text'
            id='name'
            name='name'
            value={reservation.name}
            onChange={handleChange}
          />
        </div>
        <div className={`form-position ${stylesFormItem}`}>
          <label htmlFor='date'>Date:</label>
          <input
            required
            type='date'
            id='date'
            name='date'
            value={reservation.date}
            onChange={handleChange}
          />
        </div>
        <div className={`form-position ${stylesFormItem}`}>
          <label htmlFor='time'>Time:</label>
          <input
            required
            type='text'
            id='time'
            name='time'
            value={reservation.time}
            onChange={handleChange}
          />
        </div>
        <div className={`form-position ${stylesFormItem}`}>
          <label htmlFor='amount'>Amount:</label>
          <input
            required
            type='number'
            id='amount'
            name='amount'
            value={reservation.amount}
            onChange={handleChange}
          />
        </div>
        <div className={`form-position ${stylesFormItem}`}>
          <label htmlFor='email'>Email:</label>
          <input
            required
            type='email'
            id='email'
            name='email'
            value={reservation.email}
            onChange={handleChange}
          />
        </div>
        <div className={`form-position ${stylesFormItem}`}>
          <label htmlFor='phone'>Phone:</label>
          <input
            required
            type='text'
            id='phone'
            name='phone'
            value={reservation.phone}
            onChange={handleChange}
          />
        </div>
        <div className={`form-position ${stylesFormItem}`}>
          <label htmlFor='event'>Event:</label>
          <select
            id='event'
            name='event'
            value={reservation.event}
            onChange={handleChange}
          >
            <option value='' defaultValue disabled hidden></option>
            {list_events.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>

          {/* <input
            type='text'
            id='event'
            name='event'
            value={reservation.event}
            onChange={handleChange}
          /> */}
        </div>
        <button
          type='submit'
          className={`btn btn-submit ${stylesFormButton}`}
          onClick={handleSubmit}
        >
          Book a table
        </button>
      </form>
    </div>
  )
  return (
    <div>
      {formSubmitionStatus === 'notSubmitted' && form}
      {formSubmitionStatus === 'submitted' && (
        <ThankYou text='Thank you for your booking!' />
      )}
    </div>
  )
}

export default BookingForm
