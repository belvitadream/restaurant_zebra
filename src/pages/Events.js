// import { useState } from 'react'
// import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { events } from '../components/data'
import { db } from '../firebase'

const Events = () => {
  // const [hover, setHover] = useState(false)

  // const [eventsDB, setEventsDB] = useState([])

  // useEffect(() => {
  //   db.collection('reviews').onSnapshot((snapshot) => {
  //     setEventsDB(snapshot.docs.map((review) => review.data()))
  //   })
  // }, [])

  return (
    <>
      <section className='events-container'>
        <h1 className='events__title title-styled'>Upcoming events</h1>
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
      </section>
    </>
  )
}

export default Events
