import { useEffect, useRef } from 'react';
import './Hero.css';
import { ASSETS } from '../../constants/assets';
import heroSide from '../../assets/images/hero-side.svg';

export default function Hero() {
    const imgRectangle5 = ASSETS.hero;
    return (
        <section className="hero">
            <div className='hero-text'>
                <h1 className="hero-title">LA MAISON</h1>
                <p className="hero-subtitle">
                    A house shaped by intention, practice, and time.
                </p>
            </div>
            <div className="hero-image-wrapper">
                <img src={imgRectangle5} alt="" className='hero-image' />
            </div>
            <img src={heroSide} alt="" className="hero-side-decoration" />
        </section>
    );
}
