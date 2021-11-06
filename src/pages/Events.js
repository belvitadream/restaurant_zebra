import { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../data'

const Events = () => {
  const [events, setEvents] = useState(data)
  return (
    <>
      <div>
        <h1>Upcoming events:</h1>
      </div>

      {data.map((event) => {
        return (
          <div key={event.id}>
            <h4>{event.name}</h4>
            <Link to={`/event/${event.id}`}>learn more</Link>
          </div>
        )
      })}
    </>
  )
}

export default Events
