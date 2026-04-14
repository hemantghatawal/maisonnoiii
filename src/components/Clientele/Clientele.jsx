import './Clientele.css';
import SectionTitle from '../common/SectionTitle';
import ClientGallery from './ClientGallery';

export default function Clientele() {
    return (
        <section className="clientele">
            <SectionTitle>Clientele</SectionTitle>
            <p className="clientele-subtitle">
                A considered body of work created alongside brands who value depth and distinction.
            </p>
            <ClientGallery />
        </section>
    );
}
