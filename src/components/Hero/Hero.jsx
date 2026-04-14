import { useRef } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import './Hero.css';
import { ASSETS } from '../../constants/assets';
import heroSide from '../../assets/images/hero-side.svg';

gsap.registerPlugin(Flip);

export default function Hero() {
    const imgRectangle5 = ASSETS.hero;
    const imgRef = useRef();

    const handleEnter = () => {
        const state = Flip.getState(imgRef.current);

        // Timeline: Circle (100%) → Capsule (50px) → Rectangle (0%)
        const tl = gsap.timeline();

        tl.to(imgRef.current, {
            borderRadius: '50px',
            duration: 0.6,
            ease: 'power2.inOut'
        })
            .to(imgRef.current, {
                borderRadius: '0%',
                duration: 0.6,
                ease: 'power2.inOut'
            });

        imgRef.current.classList.add('expanded');

        Flip.from(state, {
            duration: 1.2,
            ease: 'power3.inOut',
            absolute: true,
        });
    };

    const handleLeave = () => {
        const state = Flip.getState(imgRef.current);

        // Timeline: Rectangle (0%) → Capsule (50px) → Circle (100%)
        const tl = gsap.timeline();

        tl.to(imgRef.current, {
            borderRadius: '50px',
            duration: 0.6,
            ease: 'power2.inOut'
        })
            .to(imgRef.current, {
                borderRadius: '100%',
                duration: 0.6,
                ease: 'power2.inOut'
            });

        imgRef.current.classList.remove('expanded');

        Flip.from(state, {
            duration: 1.2,
            ease: 'power3.inOut',
            absolute: true,
        });
    };

    return (
        <section className="hero">
            <div className='hero-text'>
                <h1 className="hero-title">LA MAISON</h1>
                <p className="hero-subtitle">
                    A house shaped by intention, practice, and time.
                </p>
            </div>
            <div className="hero-image-wrapper">
                <img
                    ref={imgRef}
                    src={imgRectangle5}
                    alt="La Maison"
                    className='hero-image'
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                />
            </div>
            <img src={heroSide} alt="" className="hero-side-decoration" />
        </section>
    );
}
