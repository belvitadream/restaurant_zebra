import { useEffect, useState } from 'react'
import { db } from '../firebase'

const ListOfReservations = () => {
  const [list, setList] = useState([])

  // GETTING FROM DATABASE
  useEffect(() => {
    db.collection('reservations').onSnapshot((snapshot) => {
      setList(snapshot.docs.map((review) => review.data()))
    })
  }, [])

  return (
    <section className='reservations-list'>
      {list.map((res) => {
        console.log(res)
        const { id, name, email, phone, date, time, amount, event } = res
        return (
          <div
            className='reservations-item'
            key={`${name + email + phone + time}`}
          >
            <h4>{name}</h4>
            <p>Phone: {phone}</p>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Amount: {amount}</p>
            <p>Email: {email}</p>
            <p>Event: {event}</p>
          </div>
        )
      })}
    </section>
  )
}

export default ListOfReservations
