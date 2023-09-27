interface PromoBannerProps {
    img: string;
    link: string;
}

// Отрисовывает рекламные баннеры
export default function PromoBanner({img, link}: PromoBannerProps) {
    return (
        <div className="promo-banner">
            <a href={link}>
                <img src={img} alt="promo" />
            </a>
        </div>
    )
}