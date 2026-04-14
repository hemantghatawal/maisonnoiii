import './Domains.css';
import SectionTitle from '../common/SectionTitle';
import SectionSubtitle from '../common/SectionSubtitle';
import DomainItem from '../common/DomainItem';
import { DOMAINS } from '../../constants/data';

export default function Domains() {
    return (
        <section className="selected-domains">
            <SectionTitle>Selected Domains</SectionTitle>
            <SectionSubtitle>
                A refined dialogue between creative expression and strategic intent.
            </SectionSubtitle>

            <div className="domains-list">
                {DOMAINS.map((domain, index) => (
                    <DomainItem key={index} title={domain} />
                ))}
            </div>
        </section>
    );
}
