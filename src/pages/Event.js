import React, { useState, useEffect } from 'react'
import data from '../data'
import { Link, useParams } from 'react-router-dom'

const Event = ({ date, desc }) => {
  const [name, setName] = useState('default event name')
  const { id } = useParams()

  useEffect(() => {
    const newEvent = data.find((event) => event.id === parseInt(id))
    setName(newEvent.name)
  }, [id])

  return (
    <>
      <h1>Single Event description</h1>
      <h2>{name}</h2>
      <h4>{date}</h4>
      <p>{desc}</p>

      <Link to='/events'>Back to people</Link>
    </>
  )
}

export default Event
