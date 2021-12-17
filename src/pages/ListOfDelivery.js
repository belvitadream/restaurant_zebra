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
      {list.map((ele) => {
        const { name, email, phone, cart, total } = ele
        return (
          <div
            className='reservations-item'
            key={name + email + phone + cart + total}
          >
            <h4>{name}</h4>
            <h4>Total: ${total}.00</h4>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <div className='cart_details'>
              <h5>name</h5>
              <h5>amount</h5>
              <h5>price</h5>
            </div>
            {cart.map((el) => {
              return (
                <div
                  className='cart_details_each'
                  key={el.name + el.amount + el.price}
                >
                  <p>{el.name}</p>
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
