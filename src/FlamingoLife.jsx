import './FlamingoLife.css';
import {
    Header,
    Hero,
    Domains,
    Disciplines,
    Clientele,
    Reflections,
    Contact
} from './components';
import { BackgroundDecorations } from './components/common';

export default function FlamingoLife() {
    return (
        <div className="flamingo-life">
            <Header />
            {/* <BackgroundDecorations /> */}
            <Hero />
            <Domains />
            <Disciplines />
            <Clientele />
            <Reflections />
            <Contact />
        </div>
    );
}
