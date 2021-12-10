const ThankYou = ({ text }) => {
  return (
    <div className='bookingForm-container'>
      <div className='submitted'>
        <h3>{text}</h3>

        {/* <h4>Below are details of your booking:</h4>
          <div className='reservations-list'>
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
          </div> */}
      </div>
    </div>
  )
}

export default ThankYou
