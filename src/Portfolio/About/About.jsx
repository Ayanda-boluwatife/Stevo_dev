import React from 'react'
import "./About.css"
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import CountUpOnScroll from '../Experience/CountupMain'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me__img">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small><CountUpOnScroll targetValue={1} /> year coding</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small><CountUpOnScroll targetValue={15} />+ Clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small><CountUpOnScroll targetValue={8} />+ Completed</small>
            </article>
          </div>
          <p>Experienced full-stack developer proficient in both frontend and backend technologies. Skilled in building scalable web applications using a combination of JavaScript frameworks such as React.js and Angular on the frontend, and Node.js and Express.js on the backend. Strong understanding of databases, RESTful APIs, and cloud platforms. Excels in designing responsive and intuitive user interfaces, implementing robust server-side logic, and ensuring high-quality code through testing and code reviews. Adept at collaborating with cross-functional teams and delivering end-to-end solutions.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About