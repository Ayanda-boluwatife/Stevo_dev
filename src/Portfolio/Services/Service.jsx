import React from 'react'
import './Service.css'
import { GiCheckMark } from 'react-icons/gi'

const Service = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Developement</h3>
          </div>

          <ul className="service__list">
            <li>
              <GiCheckMark />
              <p>Responsive website development using HTML, CSS, and JavaScript.</p>
            </li>
            <li>
              <GiCheckMark />
              <p>Front-end frameworks like React.js.</p>
            </li>
            <li>
              <GiCheckMark />
              <p>Back-end development using Node.js.</p>
            </li>
            <li>
              <GiCheckMark />
              <p>Database integration and management using MongoDB.</p>
            </li>
            <li>
              <GiCheckMark />
              <p>E-commerce website development with payment gateway integration.</p>
            </li>
            <li>
              <GiCheckMark />
              <p>Website performance optimization and security enhancements.</p>
            </li>
            <li>
              <GiCheckMark />
              <p>Content Management Systems (CMS) development and customization (e.g., WordPress).</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web & Mobile-App Developement</h3>
          </div>

          <ul className="service__list">
            <li>
              <GiCheckMark />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <GiCheckMark />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <GiCheckMark />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <GiCheckMark />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <GiCheckMark />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <GiCheckMark />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Mobile-App Developement</h3>
          </div>

          <ul className="service__list">
            <li>
              <GiCheckMark />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <GiCheckMark />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <GiCheckMark />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <GiCheckMark />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <GiCheckMark />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service