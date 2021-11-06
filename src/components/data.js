import React from 'react'
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/events',
    text: 'events',
  },
  {
    id: 4,
    url: '/menu',
    text: 'menu',
  },
  {
    id: 5,
    url: '/reviews',
    text: 'reviews',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.instagram.com',
    icon: <FaInstagram />,
  },
  {
    id: 4,
    url: 'https://www.youtube.com',
    icon: <FaYoutube />,
  },
]
