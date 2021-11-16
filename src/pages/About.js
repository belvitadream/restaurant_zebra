import { useState } from 'react'
import { Link } from 'react-router-dom'
import cook from '../assets/cook.svg'
import dish from '../assets/food.jpg'
import artichoke from '../assets/artichoke.jpg'
import Footer from '../components/Footer'
import BookingForm from '../components/BookingForm'

const About = () => {
  return (
    <div className='container-appear-opacity'>
      <header className='promo-container'>
        <section className='promo'>
          <h1>Fine Dining And Fine Experience</h1>
          <div className='promo_buttons'>
            <button>
              <Link to='/reservation' className='btn button_left'>
                book a table
              </Link>
            </button>
            <button>
              <Link to='/menu' className='btn button_right'>
                see the menu
              </Link>
            </button>
          </div>
        </section>
      </header>

      <BookingForm
        stylesForm='small-black-form'
        stylesFormContainer='small-black-formContainer'
        stylesFormItem='small-black-formItem'
        stylesFormButton='small-black-submitButton'
      />

      <main>
        <section className='about'>
          <div className='description'>
            <h2>Just the right food</h2>
            <p>
              Zebra's new and vegan restaurant, which provides its clients with
              the most sophisticated design and healthy food. Combination of
              natural and organic products with the professionalism and
              originality of our chefs will bring smile and calmness to your
              mind.
            </p>
            <img src={cook} alt='cook' />
          </div>

          <div className='image-container'>
            <img src={dish} alt='dish' className='image img-sq' />
          </div>
        </section>

        <section className='about section-black'>
          <div className='image-container'>
            <img src={artichoke} alt='artichoke' className='image img-sq' />
          </div>
          <div className='description'>
            <h2>Best ingredients</h2>
            <p>
              Zebra's new and vegan restaurant, which provides its clients with
              the most sophisticated design and healthy food. Combination of
              natural and organic products with the professionalism and
              originality of our chefs will bring smile and calmness to your
              mind.
            </p>
          </div>
        </section>

        <section className='about'>
          <div className='reviews'>
            <h2>Guest review SLIDER</h2>
            <p>
              Zebra's new and vegan restaurant, which provides its clients with
              the most sophisticated design and healthy food. Combination of
              natural and organic products with the professionalism and
              originality of our chefs will bring smile and calmness to your
              mind.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default About
