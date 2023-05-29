import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
// import CountUp from 'react-countup';
import CountUpOnScroll from './CountupMain';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container" data-aos="fade-left">
        <div className="experience__frontend">
          <h2>Frontend Development</h2>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h3>HTML</h3>
                <small className='text-light'><CountUpOnScroll targetValue={90} /> %</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h3>CSS</h3>
                <small className='text-light'><CountUpOnScroll targetValue={95} /> % </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h3>Bootstrap</h3>
                <small className='text-light'><CountUpOnScroll targetValue={100} /> %</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h3>Javscript</h3>
                <small className='text-light'><CountUpOnScroll targetValue={80} /> %</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h3>TailwindCss</h3>
                <small className='text-light'><CountUpOnScroll targetValue={100} /> %</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h3>React.js</h3>
                <small className='text-light'><CountUpOnScroll targetValue={90} /> %</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h2>Backend Development</h2>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h3>MongoDB</h3>
                <small className='text-light'><CountUpOnScroll targetValue={70} /> %</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h3>Express.js</h3>
                <small className='text-light'><CountUpOnScroll targetValue={50} /> %</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h3>React.js</h3>
                <small className='text-light'><CountUpOnScroll targetValue={90} /> %</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h3>Node.js</h3>
                <small className='text-light'><CountUpOnScroll targetValue={50} /> %</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience