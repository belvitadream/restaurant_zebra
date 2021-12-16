import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import reviews from '../components/data'
import { db } from '../firebase'

const Review = () => {
  const [reviewsDB, setReviewsDB] = useState([])

  const [index, setIndex] = useState(0)

  useEffect(() => {
    db.collection('reviews').onSnapshot((snapshot) => {
      setReviewsDB(snapshot.docs.map((review) => review.data()))
    })
  }, [])

  // console.log(reviewsDB)
  // console.log(reviewsDB[0])

  const { name, text } = reviews[index]

  const validNumber = (number) => {
    if (number > reviewsDB.length - 1) {
      return (number = 0)
    }
    if (number < 0) {
      return reviewsDB.length - 1
    }

    if (number === index) {
      number = generateRandom()
    }
    return number
  }

  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return validNumber(newIndex)
    })
  }

  const prevReview = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return validNumber(newIndex)
    })
  }

  const randomReview = () => {
    let random = generateRandom()
    if (random === index) {
      random += 1
    }
    setIndex(validNumber(random))
  }

  const generateRandom = () => {
    return Math.floor(Math.random() * reviewsDB.length)
  }

  return (
    <article className='review'>
      <div>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>

        <h4 className='author'>{name}</h4>
      </div>

      <p className='text'>{text}</p>
      <div className='buttons-container'>
        <button className='btn prev-btn' onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className='btn random-btn' onClick={randomReview}>
          surprise me
        </button>
        <button className='btn next-btn' onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  )
}

export default Review
