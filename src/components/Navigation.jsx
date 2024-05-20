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
    <div>
    <Link to="/EdSheran">
        <figure>
            <EdSheeran />
            <figcaption>Ed Sheeran</figcaption>
        </figure>
    </Link>
    <Link to="/HaAsh">
        <figure>
            <HaAsh />
            <figcaption>Ha*Ash</figcaption>
        </figure>
    </Link>
    <Link to="/JesseJoy">
        <figure>
            <JesseJoy />
            <figcaption>Jesse & Joy</figcaption>
        </figure>
    </Link>
    <Link to="/Kudai">
        <figure>
            <Kudai />
            <figcaption>Kudai</figcaption>
        </figure>
    </Link>
    <Link to="/Mana">
        <figure>
            <Mana />
            <figcaption>Mana</figcaption>
        </figure>
    </Link>
    <Link to="/Marron5">
        <figure>
            <Marron5 />
            <figcaption>Marron 5</figcaption>
        </figure>
    </Link>
    <Link to="/Natalia">
        <figure>
            <NataliaJimenez />
            <figcaption>Natalia Jimenez</figcaption>
        </figure>
    </Link>
    <Link to="/Oreja">
        <figure>
            <OrejadeVanGogh />
            <figcaption>Oreja de Van Gogh</figcaption>
        </figure>
    </Link>
    <Link to="/OV7">
        <figure>
            <Ov7 />
            <figcaption>Ov 7</figcaption>
        </figure>
    </Link>
    <Link to="/Rbd">
        <figure>
            <Rbd />
            <figcaption>Rbd</figcaption>
        </figure>
    </Link>
    </div>
    
  )
}

export default Navigation