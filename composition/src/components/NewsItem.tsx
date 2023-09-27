// Отрисовывает одну новость
export interface NewsItemProps {
    logo: string;
    title: string;
    link: string;
}

export default function NewsItem({item} : {item: NewsItemProps}) {
    const {logo, title, link}=item
    return (
        <div className="news-item">
            <img src={logo} alt="Logo" className="news-logo"/>
            <a href={link}>
            <h2 className="news-title">{title}</h2>
            </a>
        </div>
    )
}