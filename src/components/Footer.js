import { social } from './data'

function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-about foot'>
          <h4>About ZEBRA</h4>
          <p>We offer healthy and vegan food combined into unique dishes.</p>
          <p>Whole, organic and bio products will enrich the taste.</p>
          <p>Estetic design and mindfull armosphere.</p>
          <p>Welcome!</p>
        </div>

        <div className='hours foot'>
          <h4>Opening Hours:</h4>
          <p>Mon-Thu: 7:00-20:00</p>
          <p>Fri-Sun: 7:00am-24:00</p>
          <p>+48 999 999 999</p>
        </div>

        <div className='location foot'>
          <h4>Our Location</h4>
          <p>ul.Szczescia 11, Krakow</p>
          <p>al.Jedzenia 21, Warszawa</p>

          <ul className='social-icons footer-icons'>
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
      </div>
    </footer>
  )
}

export default Footer
