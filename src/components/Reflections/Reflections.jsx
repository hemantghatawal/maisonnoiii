import './Reflections.css';
import SectionTitle from '../common/SectionTitle';
import ReflectionCard from '../common/ReflectionCard';
import { REFLECTIONS_DATA } from '../../constants/data';

export default function Reflections() {
    return (
        <section className="reflections">
            <SectionTitle>Client Reflections</SectionTitle>
            <p className="reflections-subtitle">
                Reflections from those we have worked alongside.
            </p>
            <div className="reflections-grid">
                {REFLECTIONS_DATA.map((reflection, index) => (
                    <ReflectionCard
                        key={index}
                        name={reflection.name}
                        text={reflection.text}
                    />
                ))}
            </div>
        </section>
    );
}
