import { useState } from 'react'
import { Link } from 'react-router-dom'
import { events } from '../components/data'

const Events = () => {
  const [hover, setHover] = useState(false)

  return (
    <>
      <div className='events-container'>
        <h1 className='menu__title'>Upcoming events</h1>
        <div className='container events'>
          {events.map((event) => {
            return (
              <div key={event.id} className='event'>
                {event.image}
                <div className='desc-container'>
                  <h4>{event.name}</h4>
                  <p>{event.desc}</p>
                  <p>{event.date}</p>
                  <Link to={`/event/${event.id}`} className='btn-learn'>
                    Learn more
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Events
