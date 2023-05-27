import React from 'react'
import './Port.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const PortData = [
    {
        id: 1,
        img: IMG1,
        title: "Number 1",
        github: 'https://github.com',
        demo: "https://english-dictionary-dev.vercel.app"
    },
    {
        id: 2,
        img: IMG2,
        title: "Number 2",
        github: 'https://github.com',
        demo: "https://english-dictionary-dev.vercel.app"
    },
    {
        id: 3,
        img: IMG3,
        title: "Number 3",
        github: 'https://github.com',
        demo: "https://english-dictionary-dev.vercel.app"
    },
    {
        id: 4,
        img: IMG4,
        title: "Number 4",
        github: 'https://github.com',
        demo: "https://english-dictionary-dev.vercel.app"
    },
    {
        id: 5,
        img: IMG5,
        title: "Number 5",
        github: 'https://github.com',
        demo: "https://english-dictionary-dev.vercel.app"
    },
    {
        id: 6,
        img: IMG6,
        title: "Number 6",
        github: 'https://github.com',
        demo: "https://english-dictionary-dev.vercel.app"
    }
]

const Port = () => {
  return (
    <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
            {
                PortData.map(({id, img, title, github, demo})=>{
                    return(
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item__img">
                                <img src={img} alt={title} />
                            <h3>{title}</h3>
                            <div className="portfolio__item__cta">
                                <a href={github} className='btn'>Github</a>
                                <a href={demo} className='btn btn-primary'>Live Demo</a>
                            </div>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Port