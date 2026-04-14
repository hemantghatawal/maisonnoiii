import './Disciplines.css';
import { useState } from 'react';
import Accordion from '../common/Accordion';
import { DISCIPLINES } from '../../constants/data';
import disciplinesBg from '../../assets/images/disciplines-bg.png';
import heroSide from '../../assets/images/hero-side.svg';

export default function Disciplines() {
    const [openAccordions, setOpenAccordions] = useState([]);

    const toggleAccordion = (index) => {
        setOpenAccordions(prev => {
            if (prev.includes(index)) return prev.filter(i => i !== index);
            if (prev.length >= 3) return [...prev.slice(1), index];
            return [...prev, index];
        });
    };

    return (
        <section className="disciplines">
            <div className="disciplines-bg">
                <img src={disciplinesBg} alt="" />
            </div>
            <img src={heroSide} alt="" className="disciplines-side-decoration" />
            <div className="disciplines-content">
                <div className="disciplines-title-sticky">
                    <h2>Our disciplines</h2>
                </div>
                <div className="disciplines-list">
                    {DISCIPLINES.map((discipline, index) => (
                        <Accordion
                            key={index}
                            title={discipline.title}
                            description={discipline.description}
                            isOpen={openAccordions.includes(index)}
                            onToggle={() => toggleAccordion(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
