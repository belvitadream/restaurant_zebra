import React, { useState } from 'react'
import CartItem from '../components/CartItem'
import { useGlobalContext } from './context'
import { db } from '../firebase'

const CartContainer = () => {
  const { cart, total, clearCart, amount } = useGlobalContext()
  const [formDelivery, setFormDelivery] = useState('notSubmitted')
  const [deliveries, setDeliveries] = useState([])

  const [delivery, setDelivery] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setDelivery({ ...delivery, [name]: value, cart, total })
    // console.log(name, value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // console.log(cart)
    console.log(delivery)

    if (delivery.name && delivery.address && delivery.email && delivery.phone) {
      const newDelivery = {
        ...delivery,
        id: new Date().getTime().toString(),
      }

      // ADDING TO DATABASE
      db.collection('delivery').add({
        ...delivery,
      })

      setDeliveries([...deliveries, newDelivery])
      setDelivery({
        name: '',
        address: '',
        email: '',
        phone: '',
      })
      setFormDelivery('submitted')
      clearCart()
    }
  }

  const deliveryFormDiv = (
    <div className={`bookingForm`}>
      <h4>Please enter delivery details </h4>
      <form className={`form`}>
        <div className={`form-position`}>
          <label htmlFor='name'>Name:</label>
          <input
            required
            type='text'
            id='name'
            name='name'
            value={delivery.name}
            onChange={handleChange}
          />
        </div>
        <div className={`form-position`}>
          <label htmlFor='name'>Address:</label>
          <input
            required
            type='text'
            id='address'
            name='address'
            value={delivery.address}
            onChange={handleChange}
          />
        </div>
        <div className={`form-position`}>
          <label htmlFor='email'>Email:</label>
          <input
            required
            type='email'
            id='email'
            name='email'
            value={delivery.email}
            onChange={handleChange}
          />
        </div>
        <div className={`form-position`}>
          <label htmlFor='phone'>Phone:</label>
          <input
            required
            type='text'
            id='phone'
            name='phone'
            value={delivery.phone}
            onChange={handleChange}
          />
        </div>
        <button
          type='submit'
          className={`btn btn-submit`}
          onClick={handleSubmit}
        >
          Order delivery
        </button>
      </form>
    </div>
  )

  if (formDelivery === 'submitted') {
    return (
      <section className='cart-container container container-appear-opacity'>
        <div className='cart_thankyou'>
          <h3>Ordered successfully!</h3>
        </div>
      </section>
    )
  }

  if (cart.length === 0) {
    return (
      <section className='cart-container container container-appear-opacity'>
        <header className='title-styled'>
          <h2>Your bag</h2>
          <h4>is currently empty</h4>
        </header>
      </section>
    )
  }

  return (
    <section className='cart-container container container-appear-opacity'>
      <header className='title-styled'>
        <h2>
          Your bag{' '}
          <span className='cart-amount'>
            ({amount === 1 ? `${amount} item` : `${amount} items`})
          </span>
        </h2>
      </header>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>

      <div className='cartContainer__total-container'>
        <h4>
          total <span>${total}.00</span>
        </h4>
        <button className='btn-clear-cart' onClick={clearCart}>
          clear cart
        </button>

        {deliveryFormDiv}
      </div>
    </section>
  )
}

export default CartContainer
