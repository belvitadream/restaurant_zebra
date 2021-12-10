import React, { useState } from 'react'
import ThankYou from '../components/ThankYou'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartContainer = () => {
  const { cart, total, clearCart, amount } = useGlobalContext()
  const [deliveryStatus, setdeliveryStatus] = useState('notSubmitted')

  const submitOrder = () => {
    setdeliveryStatus('submitted')
  }

  if (deliveryStatus === 'submitted') {
    return <ThankYou text='Thank you for your order!' />
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
        <button className='btn btn-order' onClick={submitOrder}>
          Order
        </button>
      </div>
    </section>
  )
}

export default CartContainer
