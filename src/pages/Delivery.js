import { useEffect, useState } from 'react'
import { food } from '../components/data'
import CartContainer from './CartContainer'
import { useGlobalContext } from './context'
import DeliveryItem from './DeliveryItem'

const Delivery = () => {
  const [loading, setLoading] = useState(true)
  const [menu, setMenu] = useState([])
  const [value, setValue] = useState(0)
  const { loading: loadingCart } = useGlobalContext()

  // setMenu(food)

  const fetchFood = async () => {
    // const response = await fetch(url)
    // const newFood = await response.json()
    setTimeout(() => {
      setMenu(food)
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    fetchFood()
  }, [])

  if (loading) {
    return (
      <div className='container-appear-opacity'>
        <h1 className='menu__title title-styled loading'>LOADING MENU...</h1>
      </div>
    )
  }

  return (
    <section className='delivery'>
      <h1 className='menu__title title-styled'>DELIVERY</h1>
      {food.map((meal) => {
        const list = Object.keys(meal).map((item) => item)
        const section1 = list[value]

        return (
          <div className='container menu-container' key={meal}>
            <div className='menu__list'>
              {list.map((section, index) => (
                <a
                  key={index}
                  href={`#${section}`}
                  className='menu__list__section'
                  onClick={() => setValue(index)}
                >
                  {section}
                </a>
              ))}
            </div>

            <div className='menu'>
              <h2 id={section1} className='menu__section'>
                {section1}
              </h2>

              {meal[section1].map((item) => {
                return <DeliveryItem key={item.id} {...item} />
              })}
            </div>
          </div>
        )
      })}

      {loadingCart ? (
        <div>
          <h1 className='menu__title title-styled'>Loading your cart...</h1>
        </div>
      ) : (
        <CartContainer />
      )}
    </section>
  )
}

export default Delivery
