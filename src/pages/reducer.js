import { act } from 'react-dom/test-utils'
import { cartItems } from '../components/data'

const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      cart: [],
    }
  }

  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    }
  }

  if (action.type === 'INCREASE') {
    // console.log(`increasing ${action.payload}`)
    // console.log(action.payload)
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 }
      }
      return item
    })

    return { ...state, cart: tempCart }
  }

  if (action.type === 'DECREASE') {
    // console.log('decreasing')
    // console.log(action.payload)
    let tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 }
        }
        return item
      })
      .filter((cartItem) => cartItem.amount !== 0)

    return { ...state, cart: tempCart }
  }

  if (action.type === 'ADD') {
    // console.log('adding')
    let newItem = action.payload
    newItem.amount = 1

    let tempCart = [...state.cart, newItem]
    // console.log(tempCart)
    return { ...state, cart: tempCart }
  }

  if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem
        const itemTotal = price * amount
        cartTotal.total += itemTotal
        cartTotal.amount += amount

        return cartTotal
      },
      {
        total: 0,
        amount: 0,
      }
    )

    total = parseFloat(total.toFixed(2))

    return { ...state, total, amount }
  }

  return state
}

export default reducer
