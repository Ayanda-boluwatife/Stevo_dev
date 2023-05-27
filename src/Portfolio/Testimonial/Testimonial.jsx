import React from 'react'
import './Testimonial.css'
import client1 from '../../assets/avatar1.jpg'
import client2 from '../../assets/avatar2.jpg'
import client3 from '../../assets/avatar3.jpg'
import client4 from '../../assets/avatar4.jpg'
import { Pagination } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'


const data = [
  {
    avatar: client1,
    name: "Idiagbon Saadu Abdulrahman",
    work: "Fullstack Developer",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est sit minima consectetur repellendus blanditiis quo nobis dolore autem fuga suscipit?",
  },
  {
    avatar: client2,
    name: "Sulieman Mustapha",
    work: "Fullstack Developer",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est sit minima consectetur repellendus blanditiis quo nobis dolore autem fuga suscipit?",
  },
  {
    avatar: client3,
    name: "Gbadegeshin Faruq",
    work: "Fullstack Developer",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est sit minima consectetur repellendus blanditiis quo nobis dolore autem fuga suscipit?",
  },
  {
    avatar: client4,
    name: "Assayouti Adams",
    work: "Frontend Developer",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est sit minima consectetur repellendus blanditiis quo nobis dolore autem fuga suscipit?",
  },
  {
    avatar: client1,
    name: "ToshConsult",
    work: "Fullstack Developer My Boss",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est sit minima consectetur repellendus blanditiis quo nobis dolore autem fuga suscipit?",
  },
  {
    avatar: client2,
    name: "Alfa Taofeeq",
    work: "Fullstack Developer",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est sit minima consectetur repellendus blanditiis quo nobis dolore autem fuga suscipit?",
  },
  {
    avatar: client3,
    name: "Adeshina Mubarak",
    work: "Frontend Developer",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est sit minima consectetur repellendus blanditiis quo nobis dolore autem fuga suscipit?",
  },
  {
    avatar: client3,
    name: "Alfa Qudus",
    work: "Frontend Developer",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est sit minima consectetur repellendus blanditiis quo nobis dolore autem fuga suscipit?",
  },
  {
    avatar: client3,
    name: "Mr David",
    work: "Manager",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est sit minima consectetur repellendus blanditiis quo nobis dolore autem fuga suscipit?",
  },
]

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>

      <Swiper className="container testimonial__container"
        modules={Pagination}
        spaceBetween={40}
        slidesPerView={2}
        pagination= {{clickable: true}}
        breakpoints={{
          0:{ 
            slidesPerView: 1,
          },
          600:{
            slidesPerView: 2,
          },
          950:{
            slidesPerView: 2,
          }
        }}
      >
        {
          data.map(({avatar, name, work, review}, index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__img">
                  <img src={avatar} alt="" />
                </div>
                <h5 className="client__name">{name}</h5>
                <h3 className="client__work">{work}</h3>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial