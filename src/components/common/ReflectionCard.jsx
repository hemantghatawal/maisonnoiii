export default function ReflectionCard({ name, text }) {
    return (
        <div className="reflection-card">
            <p className="reflection-name">{name}</p>
            <p className="reflection-text">{text}</p>
        </div>
    );
}
