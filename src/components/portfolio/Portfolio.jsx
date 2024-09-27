import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/country-api-project.jpg'
import IMG2 from '../../assets/cart-list-project.jpg'
import IMG3 from '../../assets/contact-form-project.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image : IMG1,
    title: 'REST Countries API with Color Theme Switcher',
    github: 'https://github.com/queen-favour/country-api.git',
    demo:  'https://country-api-taupe.vercel.app/',
  },
  {
    id: 2,
    image : IMG2,
    title: 'Products List with Cart',
    github: 'https://github.com/queen-favour/add-to-cart.git',
    demo:  'https://add-to-cart-mu-six.vercel.app/',
  },
  {
    id: 2,
    image : IMG3,
    title: 'Contact Form',
    github: 'https://github.com/queen-favour/contact-form.git',
    demo:  'https://contact-form-two-vert.vercel.app/',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image,title, github, demo}) =>{
            return(
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio