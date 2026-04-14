import { ASSETS } from '../../constants/assets';

export default function BackgroundDecorations() {
    const imgLaMaisonSvg1 = ASSETS.laMaisonSvg;
    const imgGroup3 = ASSETS.group3;
    return (
        <>
            <div className="bg-decoration bg-decoration-1">
                <img src={imgLaMaisonSvg1} alt="" />
            </div>
            <div className="bg-decoration bg-decoration-2">
                <img src={imgGroup3} alt="" />
            </div>
        </>
    );
}
