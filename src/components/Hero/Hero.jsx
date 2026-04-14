import { ASSETS } from '../../constants/assets';

export default function Hero() {
    const imgRectangle5 = ASSETS.hero;
    return (
        <section className="hero">
            <div className="hero-image">
                <img src={imgRectangle5} alt="" />
            </div>
            <h1 className="hero-title">LA MAISON</h1>
            <p className="hero-subtitle">
                A house shaped by intention, practice, and time.
            </p>
        </section>
    );
}
