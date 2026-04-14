import './Header.css';
import { ASSETS } from '../../constants/assets';

export default function Header() {
    const imgRectangle64 = ASSETS.headerOverlay;
    const imgHeroiconsOutlineMenuAlt4 = ASSETS.menuIcon;
    return (
        <header className="header">
            <div className="header-overlay">
                <img src={imgRectangle64} alt="" />
            </div>
            <div className="logo">
                <span className="logo-main">maison</span>
                <span className="logo-sub">no. 3</span>
            </div>
            <button className="menu-button">
                <img src={imgHeroiconsOutlineMenuAlt4} alt="Menu" />
            </button>
        </header>
    );
}
