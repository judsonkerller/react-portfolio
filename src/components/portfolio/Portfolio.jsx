import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://github.com/judsonkerller'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Linktree',
    github: 'https://github.com',
    demo: 'https://github.com/judsonkerller'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Event Platform',
    github: 'https://github.com',
    demo: 'https://github.com/judsonkerller'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a 
                    href={github} 
                    className='btn'
                    target='_blank'
                    rel='noreferrer'  
                  >Github</a>
                  <a 
                    href={demo} 
                    className='btn btn-primary'
                    target='_blank'
                    rel='noreferrer' 
                  >Live a demo</a>
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