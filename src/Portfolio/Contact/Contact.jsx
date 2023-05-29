import React from 'react'
import './Contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { FaFacebookMessenger } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendform('service_c8lmer8', 'template_q2ww1vm', form.current, 'XMj__3kN_ZQlvwHpL')
    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail />
            <h4>Email</h4>
            <h5>ayandastephen1000@gmail.com</h5>
            <a href="mailto:ayandastephen1000@gmail.com">Send a Message</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger />
            <h4>Messenger</h4>
            <h5>Ayanda Boluwatife</h5>
            <a href="https://facebook.com">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>09115819983</h5>
            <a href="https://api.whatsapp.com/send?phone+2348061466476">Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full-Name' required />
          <input type="text" name="email" placeholder='Your Email' required />
          <textarea name="msg" rows="7" placeholder='Your message' required ></textarea>
          <button type="submit" className='btn btn-primary'>Send a message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact