import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/groppa.png'
import IMG2 from '../../assets/plantmanager.png'
import IMG3 from '../../assets/event-platform.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Groppa',
    subtitle: 'HTML - Tailwind',
    github: 'https://github.com',
    demo: 'https://github.com/judsonkerller'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Plant Manager - App',
    subtitle: 'React Native - Expo',
    github: 'https://github.com/judsonkerller/plantmanager/tree/main',
    demo: 'https://github.com/judsonkerller/plantmanager/tree/main'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Event Platform',
    subtitle: 'React - Tailwind - Vercel - GraphQL',
    github: 'https://github.com/judsonkerller/event-platform',
    demo: 'https://event-platform-pied-zeta.vercel.app/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, subtitle, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{subtitle}</p>
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