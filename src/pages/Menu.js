import { useRef } from 'react'
import { food } from '../components/data'

const Menu = () => {
  // const scroll = (ref) => {
  //   ref.current.scrollIntoView({ behavior: 'smooth' })
  // }

  return (
    <>
      <h1 className='menu__title'>MENU</h1>
      {food.map((meal) => {
        const list = Object.keys(meal).map((item) => item)

        return (
          <div className='container menu-container'>
            <div className='menu__list'>
              {list.map((section) => (
                <a
                  href={`#${section}`}
                  // onClick={() => {
                  //   scroll(section)
                  // }}
                  className='menu__list__section'
                >
                  {section}
                </a>
              ))}
            </div>
            {list.map((section, index) => {
              return (
                <div key={index} className='menu'>
                  <h2 id={section} className='menu__section'>
                    {section}
                  </h2>
                  {meal[section].map((item) => {
                    return (
                      <div className='menu__item' key={item.id}>
                        <p className='fa fa-dot-circle-o'></p>
                        <p className='menu__name'>{item.name}</p>
                        <p className='menu__price'>{item.price}.00$</p>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        )
      })}
    </>
  )
}

export default Menu
