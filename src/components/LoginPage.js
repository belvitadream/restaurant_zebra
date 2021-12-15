import { useState } from 'react'

const LoginPage = () => {
  const [openLogin, setOpenLogin] = useState(false)
  const [user, setUser] = useState({ username: '', password: '' })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser({ ...user, [name]: value })
    console.log(name, value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.username && user.password) {
      const newUser = {
        ...user,
        id: new Date().getTime().toString(),
      }
      console.log(newUser)
    }
  }

  return (
    <section className='login review'>
      <h4 className='reviews__title title-styled'>
        Please log in in order to review Reservations and Deliveries
      </h4>

      {/* <div className='login-promo_buttons'>
        <button className='btn' onClick={() => setOpenLogin(true)}>
          Log in
        </button>
        <button className='btn'>Sign up</button>
      </div> */}

      <form className='login-form form'>
        <div className='form-position '>
          <label htmlFor='username'>username</label>
          <input
            type='text'
            name='username'
            id='username'
            value={user.username}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='form-position '>
          <label htmlFor='password'>password</label>
          <input
            type='password'
            name='password'
            id='password'
            value={user.password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button
          type='submit'
          className={`btn btn-submit`}
          onClick={handleSubmit}
        >
          LOG IN
        </button>
      </form>
    </section>
  )
}

export default LoginPage
