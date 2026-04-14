import { ASSETS } from '../../constants/assets';

export default function Accordion({ title, isOpen, onToggle }) {
    const imgIconoirArrowUp = ASSETS.arrowUp;
    return (
        <button className="accordion" onClick={onToggle}>
            <div className="accordion-line"></div>
            <div className="accordion-content">
                <p className="accordion-title">{title}</p>
                <div className="accordion-icon">
                    <img src={imgIconoirArrowUp} alt="" />
                </div>
            </div>
        </button>
    );
}
