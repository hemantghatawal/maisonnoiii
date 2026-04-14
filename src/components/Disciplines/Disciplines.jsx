import { useState } from 'react';
import Accordion from '../common/Accordion';
import { DISCIPLINES } from '../../constants/data';
import { ASSETS } from '../../constants/assets';

const imgGroup9 = ASSETS.disciplinesBg;

export default function Disciplines() {
    const [openAccordion, setOpenAccordion] = useState(null);

    return (
        <section className="disciplines">
            <div className="disciplines-bg">
                <img src={imgGroup9} alt="" />
            </div>
            <div className="disciplines-content">
                <div className="disciplines-title-sticky">
                    <h2>Our disciplines</h2>
                </div>
                <div className="disciplines-list">
                    {DISCIPLINES.map((discipline, index) => (
                        <Accordion
                            key={index}
                            title={discipline}
                            isOpen={openAccordion === index}
                            onToggle={() => setOpenAccordion(openAccordion === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
