import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ASSETS } from '../../constants/assets';

const TOP_ROW = [
    ASSETS.gallery.rectangle16,
    ASSETS.gallery.rectangle27,
    ASSETS.gallery.rectangle25,
    ASSETS.gallery.rectangle26,
];

const BOTTOM_ROW = [
    ASSETS.gallery.rectangle24,
    ASSETS.gallery.rectangle30,
    ASSETS.gallery.rectangle28,
    ASSETS.gallery.rectangle29,
];

// Entire row slides in as one unit with bounce
// direction: 'right' = row comes from right (top row), 'left' = from left (bottom row)
const rowVariants = (direction) => ({
    hidden: {
        x: direction === 'right' ? '100vw' : '-100vw',
        opacity: 1,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 40,   // low stiffness = slow, weighty feel
            damping: 10,     // low damping = more bounce/overshoot
            mass: 1.2,
        },
    },
});

function GalleryRow({ images, direction, className }) {
    const wrapperRef = useRef(null);
    const inView = useInView(wrapperRef, { once: false, amount: 0.25 });

    return (
        <div ref={wrapperRef} className={`gallery-row-wrapper ${className}`}>
            <motion.div
                className="gallery-row"
                variants={rowVariants(direction)}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                {images.map((src, index) => (
                    <div key={index} className="gallery-item">
                        <img src={src} alt="" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default function ClientGallery() {
    return (
        <div className="client-gallery">
            {/* Top row: cards come from the right */}
            <GalleryRow images={TOP_ROW} direction="right" className="gallery-row-top" />
            {/* Bottom row: cards come from the left */}
            <GalleryRow images={BOTTOM_ROW} direction="left" className="gallery-row-bottom" />
        </div>
    );
}
