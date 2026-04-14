import { ASSETS } from '../../constants/assets';

const GALLERY_IMAGES = [
    { src: ASSETS.gallery.rectangle16, left: '0', top: '0' },
    { src: ASSETS.gallery.rectangle24, left: '-82.71%', top: '50%' },
    { src: ASSETS.gallery.rectangle27, left: '116.66%', top: '0' },
    { src: ASSETS.gallery.rectangle30, left: '-60.1%', top: '50%' },
    { src: ASSETS.gallery.rectangle25, left: '139.1%', top: '0' },
    { src: ASSETS.gallery.rectangle28, left: '-37.49%', top: '50%' },
    { src: ASSETS.gallery.rectangle26, left: '161.53%', top: '0' },
    { src: ASSETS.gallery.rectangle29, left: '-7.1%', top: '50%' }
];

export default function ClientGallery() {
    return (
        <div className="client-gallery">
            {GALLERY_IMAGES.map((image, index) => (
                <div
                    key={index}
                    className="gallery-item"
                    style={{ left: image.left, top: image.top }}
                >
                    <img src={image.src} alt="" />
                </div>
            ))}
        </div>
    );
}
