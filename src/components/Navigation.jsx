import React from 'react'
import {Link} from 'react-router-dom';
import EdSheeran from './EdSheeran';
import HaAsh from './HaAsh';
import JesseJoy from './JesseJoy';
import Kudai from './Kudai';
import Mana from './Mana';
import Marron5 from './Marron5';
import NataliaJimenez from './NataliaJimenez';
import OrejadeVanGogh from './OrejadeVanGogh';
import Ov7 from './Ov7';
import Rbd from './Rbd';

const Navigation = () => {
  return (
    <div className="container mt-4 father">
    <Link to="/EdSheran" className="links">
        <figure className="image-size">
            <EdSheeran />
            <figcaption>Ed Sheeran</figcaption>
        </figure>
    </Link>
    <Link to="/HaAsh" className="links">
        <figure className="image-size">
            <HaAsh />
            <figcaption>Ha*Ash</figcaption>
        </figure>
    </Link>
    <Link to="/JesseJoy" className="links">
        <figure className="image-size">
            <JesseJoy />
            <figcaption>Jesse & Joy</figcaption>
        </figure>
    </Link>
    <Link to="/Kudai" className="links">
        <figure className="image-size">
            <Kudai />
            <figcaption>Kudai</figcaption>
        </figure>
    </Link>
    <Link to="/Mana" className="links">
        <figure className="image-size">
            <Mana />
            <figcaption>Mana</figcaption>
        </figure>
    </Link>
    <Link to="/Marron5" className="links">
        <figure className="image-size">
            <Marron5 />
            <figcaption>Marron 5</figcaption>
        </figure>
    </Link>
    <Link to="/Natalia" className="links">
        <figure className="image-size">
            <NataliaJimenez />
            <figcaption>Natalia Jimenez</figcaption>
        </figure>
    </Link>
    <Link to="/Oreja" className="links">
        <figure className="image-size">
            <OrejadeVanGogh />
            <figcaption>Oreja de Van Gogh</figcaption>
        </figure>
    </Link>
    <Link to="/OV7" className="links">
        <figure className="image-size">
            <Ov7 />
            <figcaption>Ov 7</figcaption>
        </figure>
    </Link>
    <Link to="/Rbd" className="links">
        <figure className="image-size">
            <Rbd />
            <figcaption>Rbd</figcaption>
        </figure>
    </Link>
    </div>
    
  )
}

export default Navigation