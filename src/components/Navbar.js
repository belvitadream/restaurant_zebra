import React, { useEffect, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import zebra2 from '../assets/zebraFINAL.svg'
import { links, social } from './data'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

  return (
    <nav>
      <div className='nav-center'>
        {/* logo */}
        <div className='nav-header'>
          <Link to='/'>
            {/* <img src={zebra} alt='logo' className='logo' /> */}
            <img src={zebra2} alt='logo' className='logo' />
          </Link>

          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        {/* links */}
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <Link className='link' to={url} key={id}>
                    {text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* social */}
        <ul className='social-icons'>
          {social.map((iconItem) => {
            const { id, url, icon } = iconItem
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
