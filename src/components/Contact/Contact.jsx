import './Contact.css';
import contactBg from '../../assets/images/contact-bg.png';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ASSETS } from '../../constants/assets';

function scrollToTop() {
    const start = window.scrollY;
    const duration = 1800;
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const eased = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        window.scrollTo({ top: start * (1 - eased), behavior: 'instant' });
        if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

const socialLinks = [
    { name: 'In', label: 'LinkedIn', url: '#' },
    { name: 'Fb', label: 'Facebook', url: '#' },
    { name: 'Be', label: 'Behance', url: '#' },
    { name: 'Tw', label: 'Twitter', url: '#' },
    { name: 'Db', label: 'Dribbble', url: '#' }
];

export default function Contact() {
    const [isFollowExpanded, setIsFollowExpanded] = useState(false);
    const [hoveredSocial, setHoveredSocial] = useState(null);

    return (
        <section className="contact">
            <div className="contact-bg">
                <img src={contactBg} alt="" />
            </div>
            <div>

                <h2 className="contact-title">Contact</h2>
                <p className="contact-subtitle">
                    We begin with an understanding, a conversation that brings clarity before form.
                </p>
            </div>
            <footer className="footer">
                <div className="footer-left">
                    <span className="back-to-top-text" onClick={scrollToTop}>back on top</span>
                    <div className="back-to-top" onClick={scrollToTop}>
                        <img src={ASSETS.arrowUp} alt="Back to top" />
                    </div>
                </div>
                <p className="footer-center">2026@Maison No.3 all rights reserved</p>
                <div
                    className="footer-right follow-us-container"
                    onMouseEnter={() => setIsFollowExpanded(true)}
                    onMouseLeave={() => {
                        setIsFollowExpanded(false);
                        setHoveredSocial(null);
                    }}
                >
                    <p className="follow-us-trigger">Follow Us</p>
                    <AnimatePresence>
                        {isFollowExpanded && (
                            <motion.div
                                className="social-links animated-links"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.4, 0, 0.2, 1]
                                }}
                            >
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        className={`social-link ${hoveredSocial !== null && hoveredSocial !== index ? 'inactive' : ''}`}
                                        onMouseEnter={() => setHoveredSocial(index)}
                                        onMouseLeave={() => setHoveredSocial(null)}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 15 }}
                                        transition={{
                                            delay: index * 0.08,
                                            duration: 0.3,
                                            ease: [0.4, 0, 0.2, 1]
                                        }}
                                    >
                                        {social.name}
                                    </motion.a>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {/* Static social links for tablet/mobile */}
                    <div className="social-links static-links">
                        {socialLinks.map((social, index) => (
                            <a
                                key={`static-${social.name}`}
                                href={social.url}
                                className="social-link"
                            >
                                {social.name}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </section>
    );
}