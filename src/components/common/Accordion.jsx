import { useRef, useEffect, useState } from 'react';
import { ASSETS } from '../../constants/assets';

export default function Accordion({ title, description, isOpen, onToggle }) {
    const imgIconoirArrowUp = ASSETS.arrowUp;
    const bodyRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (bodyRef.current) {
            setHeight(bodyRef.current.scrollHeight);
        }
    }, [description]);

    return (
        <button className={`accordion${isOpen ? ' accordion--open' : ''}`} onClick={onToggle}>
            <div className="accordion-line"></div>
            <div className="accordion-content">
                <p className="accordion-title">{title}</p>
                <div className="accordion-icon">
                    <img src={imgIconoirArrowUp} alt="" />
                </div>
            </div>
            <div
                className="accordion-body"
                style={{ height: isOpen ? `${height}px` : '0px' }}
            >
                <p className="accordion-description" ref={bodyRef}>{description}</p>
            </div>
        </button>
    );
}
