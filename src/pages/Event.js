import React, { useState, useEffect } from 'react'
import { events } from '../components/data'
import { Link, useParams } from 'react-router-dom'

const Event = ({ date, desc }) => {
  const [name, setName] = useState('default event name')
  const [details, setDetails] = useState({
    id: '',
    name: '',
    date: '',
    image: '',
    desc: '',
    long: '',
  })
  const { id } = useParams()

  useEffect(() => {
    const newEvent = events.find((event) => event.id === parseInt(id))
    setName(newEvent.name)
    setDetails(newEvent)
  }, [id])

  return (
    <div className='event-container container-appear-opacity'>
      <div className='event__desc-container'>
        <h2>{name}</h2>
        <h4>{details.desc}</h4>
        <p>{details.date}</p>
        <p>{details.long}</p>
        <div className='event__btn-container'>
          <Link className='btn' to='/reservation'>
            Register
          </Link>
          <Link className='btn' to='/events'>
            Back to events
          </Link>
        </div>
      </div>
      <div className='event__image-container'>{details.image}</div>
    </div>
  )
}

export default Event
