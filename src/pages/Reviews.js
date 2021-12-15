import { useEffect, useState } from 'react'
import Review from './Review'

const Reviews = () => {
  return (
    <section>
      <h1 className='reviews__title title-styled'>Reviews</h1>
      <div className='container-appear-opacity reviews-container'>
        <Review />
      </div>
    </section>
  )
}

export default Reviews
