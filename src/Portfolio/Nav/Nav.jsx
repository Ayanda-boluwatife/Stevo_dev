import {React, useState} from 'react'
import './Nav.css'
import {AiOutlineHome, AiOutlineUser, AiFillContacts} from 'react-icons/ai'
import {BsBarChart} from 'react-icons/bs'
import {GiBrain} from 'react-icons/gi'


const Nav = () => {
  const [active, setActive] = useState('#home')

  const [showFeature1, setShowFeature1] = useState(false);
  const [showFeature2, setShowFeature2] = useState(false);
  const [showFeature3, setShowFeature3] = useState(false);
  const [showFeature4, setShowFeature4] = useState(false);
  const [showFeature5, setShowFeature5] = useState(false);

  const handleMouseEnter1 = () => {
    setShowFeature1(true);
  };

  const handleMouseLeave1 = () => {
    setShowFeature1(false);
  };

  const handleMouseEnter2 = () => {
    setShowFeature2(true);
  };

  const handleMouseLeave2 = () => {
    setShowFeature2(false);
  };

  const handleMouseEnter3 = () => {
    setShowFeature3(true);
  };

  const handleMouseLeave3 = () => {
    setShowFeature3(false);
  };

  const handleMouseEnter4 = () => {
    setShowFeature4(true);
  };

  const handleMouseLeave4 = () => {
    setShowFeature4(false);
  };

  const handleMouseEnter5 = () => {
    setShowFeature5(true);
  };

  const handleMouseLeave5 = () => {
    setShowFeature5(false);
  };
  return (
    <nav>
      <a href="#home" onClick={() => setActive('#home')} className={active === '#home' ? 'active' : ''} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
        <AiOutlineHome />
        {showFeature1 && (
          <div className="tooltip">
            <p>Home</p>
          </div>
        )}
      </a>
      <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
        <AiOutlineUser />
        {showFeature2 && (
          <div className="tooltip">
            <p>About</p>
          </div>
        )}
      </a>
      <a href="#experience" onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''} onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
        <GiBrain />
        {showFeature3 && (
          <div className="tooltip">
            <p>Experience</p>
          </div>
        )}
      </a>
      <a href="#services" onClick={() => setActive('#services')} className={active === '#services' ? 'active' : ''} onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
        <BsBarChart />
        {showFeature4 && (
          <div className="tooltip">
            <p>Service</p>
          </div>
        )}
      </a>
      <a href="#contact" onClick={() => setActive('#contact')} className={active === '#experience' ? 'active' : ''} onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
        <AiFillContacts />
        {showFeature5 && (
          <div className="tooltip">
            <p>Contact</p>
          </div>
        )}
      </a>
    </nav>
  )
}

export default Nav