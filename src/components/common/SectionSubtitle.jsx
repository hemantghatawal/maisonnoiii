export default function SectionSubtitle({ children, className = '', cursive = false }) {
    return (
        <p className={`section-subtitle ${cursive ? 'font-cursive' : ''} ${className}`}>
            {children}
        </p>
    );
}
