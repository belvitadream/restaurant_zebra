import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const [showForm, setShowForm] = useState(true)
  const [openSignUp, setOpenSignUp] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)
  const [account, setAccount] = useState({
    username: '',
    password: '',
    email: '',
  })
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // use logged in
        console.log(authUser)
        setUser(authUser)
        setShowForm(false)

        if (authUser.displayName) {
          // dont update username
        } else {
          // if we just created profile
          return authUser.updateProfile({
            displayName: account.username,
          })
        }
      } else {
        // user logged out
        setUser(null)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [user, account.username])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setAccount({ ...account, [name]: value })
    // console.log(name, value)
  }

  const signUp = (e) => {
    e.preventDefault()
    if (account.username && account.password) {
      const newAccount = {
        ...account,
        // id: new Date().getTime().toString(),
      }
      setAccount(newAccount)
      auth
        .createUserWithEmailAndPassword(account.email, account.password)
        .then((authUser) => {
          return authUser.user.updateProfile({
            displayName: account.username,
          })
        })
        .catch((e) => console.log(e))
      console.log(newAccount)

      setOpenLogin(false)
      setOpenSignUp(false)
    }
  }

  const login = (e) => {
    e.preventDefault()
    if (account.email && account.password) {
      const newAccount = {
        ...account,
        id: new Date().getTime().toString(),
      }
      setAccount(newAccount)
      console.log(newAccount)

      auth
        .signInWithEmailAndPassword(account.email, account.password)
        .then(() => {
          setOpenLogin(false)
          setOpenSignUp(false)
          setShowForm(false)
        })
        .catch((err) => alert(err.message))
    }

    // if (account.email === 'anna@gmail.com' && account.password === 'anna') {
    //   setShowForm(false)
    // }
  }

  return (
    <section className='login review'>
      {showForm && (
        <>
          <h4 className='reviews__title title-styled'>
            Please log in in order to review Reservations and Deliveries
          </h4>
          <div className='login-promo_buttons'>
            <button
              className='btn'
              onClick={() => {
                setOpenLogin(true)
                setOpenSignUp(false)
              }}
            >
              Log in
            </button>
            <button
              className='btn'
              onClick={() => {
                setOpenSignUp(true)
                setOpenLogin(false)
              }}
            >
              Sign up
            </button>
          </div>

          {openSignUp && (
            <form className='login-form form'>
              <div className='form-position '>
                <label htmlFor='username'>username</label>
                <input
                  type='text'
                  name='username'
                  id='username'
                  value={account.username}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className='form-position '>
                <label htmlFor='email'>email</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  value={account.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className='form-position '>
                <label htmlFor='password'>password</label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  value={account.password}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <button
                type='submit'
                className={`btn btn-submit`}
                onClick={signUp}
              >
                SIGNUP
              </button>
            </form>
          )}
          {openLogin && (
            <form className='login-form form'>
              <div className='form-position '>
                <label htmlFor='email'>email</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  value={account.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className='form-position '>
                <label htmlFor='password'>password</label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  value={account.password}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <button
                type='submit'
                className={`btn btn-submit`}
                onClick={login}
              >
                LOG IN
              </button>
            </form>
          )}
        </>
      )}

      {!showForm && (
        <div>
          <h4 className='reviews__title title-styled'>
            You are now logged in. <br />
            You can now view Reservations and Deliveries.
          </h4>
          <div>
            {user ? (
              <button
                className='btn'
                onClick={() => {
                  auth.signOut()
                  setShowForm(true)
                }}
              >
                <p> Log out</p>
              </button>
            ) : (
              ''
            )}
          </div>

          <div className='login-promo_buttons'>
            <Link to='/listofdelivery'>
              <button className='btn'>Deliveries</button>
            </Link>

            <Link to='/listofreservations'>
              <button className='btn'>Reservations</button>
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}

export default LoginPage
