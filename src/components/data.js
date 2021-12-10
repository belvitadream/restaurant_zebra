import React from 'react'
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa'
import vegan from '../assets/salad.jpg'
import chinese from '../assets/chinese.jpg'
import japan from '../assets/sushi.jpg'
import thai from '../assets/thai.jpg'
import italian from '../assets/pizza.jpg'
import ukrainian from '../assets/ukrainian.jpg'

export const links = [
  {
    id: 1,
    url: '/',
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
  {
    id: 6,
    url: '/reservation',
    text: 'reservation',
  },
  {
    id: 7,
    url: '/delivery',
    text: 'delivery',
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

export const food = [
  {
    breakfast: [
      {
        id: 1,
        name: 'tempeh bacon with sautéed mushrooms, avocado, and wilted arugula',
        price: 10,
        amount: 0,
      },
      {
        id: 2,
        name: 'coconut yogurt with berries, walnuts, and chia seeds',
        price: 10,
        amount: 0,
      },
      {
        id: 3,
        name: 'sweet potato toast topped with peanut butter and banana',
        price: 7,
        amount: 0,
      },
      {
        id: 4,
        name: 'eggless quiche with silken tofu, broccoli, tomatoes, and spinach',
        price: 8,
        amount: 0,
      },
      {
        id: 5,
        name: 'overnight oats with apple slices, pumpkin seeds, cinnamon, and nut butter',
        price: 10,
        amount: 0,
      },
    ],
    brunch: [
      {
        id: 6,
        name: 'black bean veggie burger with steamed broccoli and sweet potato wedges',
        price: 17,
        amount: 0,
      },
      {
        id: 7,
        name: 'garlic-ginger tofu with stir-fried veggies and quinoa',
        price: 19,
        amount: 0,
      },
      {
        id: 8,
        name: 'lentil chili with grilled asparagus and baked potato',
        price: 20,
        amount: 0,
      },
      {
        id: 9,
        name: 'whole-grain pasta with lentil “meatballs” and a side salad',
        price: 18,
        amount: 0,
      },
      {
        id: 10,
        name: 'baked tofu with sautéed red cabbage, Brussels sprouts, and herbed couscous',
        price: 20,
        amount: 0,
      },
    ],
    dinner: [
      {
        id: 11,
        name: 'cauliflower and chickpea tacos with guacamole and pico de gallo',
        price: 25,
        amount: 0,
      },
      {
        id: 12,
        name: 'mushroom lentil loaf with garlic cauliflower and Italian green beans',
        price: 27,
        amount: 0,
      },
      {
        id: 13,
        name: 'oat risotto with Swiss chard, mushrooms, and butternut squash',
        price: 30,
        amount: 0,
      },
      {
        id: 14,
        name: 'Mediterranean lentil salad with cucumbers, olives, peppers, sun-dried tomatoes, kale, and parsley',
        price: 31,
        amount: 0,
      },
      {
        id: 15,
        name: 'mac and “cheese” with nutritional yeast and collard greens',
        price: 28,
        amount: 0,
      },
    ],
    beverages: [
      {
        id: 16,
        name: 'Super Creamy Vegan Hot Chocolate',
        price: 5,
        amount: 0,
      },
      {
        id: 17,
        name: 'Vegan Pumpkin Spice Latte',
        price: 10,
        amount: 0,
      },
      {
        id: 18,
        name: 'Mulled Cranberry Cider',
        price: 5,
        amount: 0,
      },
      {
        id: 19,
        name: 'Vegan Peppermint Drinking Chocolate',
        price: 3,
        amount: 0,
      },
      {
        id: 20,
        name: 'London Fog Latte',
        price: 5,
        amount: 0,
      },
      {
        id: 21,
        name: 'Hot Apple Cider',
        price: 4,
        amount: 0,
      },
      {
        id: 22,
        name: 'Maple Gingerbread Latte',
        price: 3,
        amount: 0,
      },
    ],
    desserts: [
      {
        id: 23,
        name: 'Avocado Chocolate Pudding Pops',
        price: 7,
        amount: 0,
      },
      {
        id: 24,
        name: 'Creamy Butternut Squash Pudding',
        price: 9,
        amount: 0,
      },
      {
        id: 25,
        name: 'Raspberry Cheesecake',
        price: 7,
        amount: 0,
      },
      {
        id: 26,
        name: 'Tart Cherry & Mint Sorbet',
        price: 8,
        amount: 0,
      },
      {
        id: 27,
        name: 'Chocolate Cake with Sweet Potato Frosting',
        price: 7,
        amount: 0,
      },
      {
        id: 28,
        name: 'Pumpkin Cake with Cream Cheese Frosting',
        price: 9,
        amount: 0,
      },
      {
        id: 29,
        name: 'Roll and Muffin Vegan Desserts',
        price: 8,
        amount: 0,
      },
      {
        id: 30,
        name: 'Meyer Lemon Muffins',
        price: 9,
        amount: 0,
      },
    ],
    special: [
      {
        id: 31,
        name: 'Sugar Snap Pea and Carrot Soba Noodles',
        price: 11,
        amount: 0,
      },
      {
        id: 32,
        name: 'Favorite Veggie Burgers',
        price: 14,
        amount: 0,
      },
      {
        id: 33,
        name: 'Vegetable Paella',
        price: 12,
        amount: 0,
      },
    ],
  },
]

export const events = [
  {
    id: 111,
    name: 'Vegan food workshop',
    date: '15 Jan 2022',
    desc: 'Whether you are a newbie in the kitchen or a lover of all things food, vegan cooking classes can help you take your meals to the next level.',
    long: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: <img className='event_image' src={vegan} alt='vegan'></img>,
  },
  {
    id: 222,
    name: 'Thai food workshop',
    date: '22 Dec 2021',
    desc: 'Step by step to cook simple Thai food for a balanced diet with detailed recipes which are delicious for your family to enjoy.',
    image: <img className='event_image' src={thai} alt='thai'></img>,
    long: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 333,
    name: 'Italian food workshop',
    date: '09 Jan 2022',
    desc: 'Learn your way around an Italian kitchen during this full-day experience, including a market visit and cooking class, topped off with a 4-course lunch. ',
    image: <img className='event_image' src={italian} alt='italian'></img>,
    long: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 444,
    name: 'Japanese cuisine workshop',
    date: '11 Dec 2021',
    desc: 'Learn how to make delicious Japanese food with these cooking class. Japan is the world’s number one food destination with cuisine celebrated throughout the world.',
    image: <img className='event_image' src={japan} alt='japan'></img>,
    long: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 555,
    name: 'Chinese cuisine workshop',
    date: '20 Dec 2021',
    desc: 'Authentic Chinese food and cultural experiences for individuals and companies.',
    image: <img className='event_image' src={chinese} alt='chinese'></img>,
    long: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 666,
    name: 'Ukrainian cuisine workshop',
    date: '27 Feb 2022',
    desc: 'Authentic Ukrainian food and cultural experiences for nice evening.',
    image: <img className='event_image' src={ukrainian} alt='ukrainian'></img>,
    long: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
]

const reviews = [
  {
    id: 1,
    name: 'anna syrotenko',
    text: 'Realy nice restaurant. Perfect food. Increadible chef. Delicious and healthy. Highly recommened!',
  },
  {
    id: 2,
    name: 'peter peterson',
    text: 'Adore this place. Best restaurant to spend time with family and friends. Though I get here pretty often alone just to enjoy healthy food and interesting fusion of ingredients. You should definitely come and visit this place!!!',
  },
  {
    id: 3,
    name: 'john jones',
    text: 'Nice atmosphere. Beautiful service and client-oriented service. Especially recomment to try best Chocolate Cake With Sweet Potato Frosting. You will never find better one. ',
  },
  {
    id: 4,
    name: 'kate katerson',
    text: 'I come here regularly just so I could try every position in the menu. This is impossible to miss. Bring your partner and whoever is not vegan, will become one!!',
  },
]

export default reviews

export const cartItems = [
  {
    id: 999,
    name: 'Vanilla bar',
    price: 5.99,
    amount: 1,
  },
  {
    id: 998,
    name: 'Maple Gingerbread LatteMaple Gingerbread LatteMaple Gingerbread Latte',
    price: 7.99,
    amount: 1,
  },
  {
    id: 997,
    name: 'Hot chocolate',
    price: 3.99,
    amount: 1,
  },
]
