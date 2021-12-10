import React from 'react'
import { useGlobalContext } from './context'

const CartItem = ({ id, name, price, amount }) => {
  const { remove, increase, decrease } = useGlobalContext()

  return (
    <article className='cart__item' key={id}>
      <h4>{name}</h4>
      <div className='cart__buttons-container'>
        <button className='cart__btn-inc' onClick={() => increase(id)}>
          +
        </button>
        <p>{amount}</p>
        <button className='cart__btn-dec' onClick={() => decrease(id)}>
          -
        </button>
      </div>
      <h4 className='item-price'>${price}.00</h4>
      <button className='remove-btn' onClick={() => remove(id)}>
        remove
      </button>
    </article>
  )
}
export default CartItem
