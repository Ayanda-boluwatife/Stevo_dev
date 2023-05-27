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
              <p>Responsive design will be guaranteed.</p>
            </li>
            <li>
              <GiCheckMark />
              <p>Full functionality</p>
            </li>
            <li>
              <GiCheckMark />
              <p>Attractive call to actions button.</p>
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