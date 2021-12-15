import { useEffect, useState } from 'react'
import { db } from '../firebase'

const ListofDelivery = () => {
  const [list, setList] = useState([])

  // GETTING FROM DATABASE
  useEffect(() => {
    db.collection('delivery').onSnapshot((snapshot) => {
      setList(snapshot.docs.map((review) => review.data()))
    })
  }, [])

  return (
    <section className='reservations-list'>
      {list.map((res) => {
        const { id, name, email, phone, cart } = res
        return (
          <div className='reservations-item' key={id}>
            <h4>{name}</h4>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>

            {cart.map((el) => {
              return (
                <div>
                  <h5>{el.name}</h5>
                  <p>{el.amount}</p>
                  <p>{el.price}</p>
                </div>
              )
            })}
          </div>
        )
      })}
    </section>
  )
}

export default ListofDelivery
