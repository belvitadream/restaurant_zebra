import React from 'react'
import { useGlobalContext } from './context'

const DeliveryItem = (item) => {
  const { add, cart } = useGlobalContext()

  const newItem = (id) => {
    if (cart.find((item) => item.id === id)) {
      console.log('item already there')
      return
    }

    add({ ...item })
  }

  return (
    <div className='menu__item delivery__item' key={item.id}>
      <p className='fa fa-dot-circle-o'></p>
      <p className='menu__name'>{item.name}</p>
      <p className='menu__price'>{item.price}.00$</p>

      <button className='btn-add' onClick={() => newItem(item.id)}>
        add
      </button>
    </div>
  )
}

export default DeliveryItem
