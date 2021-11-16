const ListOfReservations = ({ reservations }) => {
  return (
    <section className='reservations-list'>
      {reservations.map((res, index) => {
        const { id, name, email, phone, date, time, amount } = res
        return (
          <div className='reservations-item' key={id}>
            <h4>{name}</h4>
            <p>{phone}</p>
            <p>{date}</p>
            <p>{time}</p>
            <p>{amount}</p>
            <p>{email}</p>
          </div>
        )
      })}
    </section>
  )
}

export default ListOfReservations
