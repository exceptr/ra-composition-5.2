import NewsItem from "./NewsItem";
import CurrencyWidget from "./CurrencyWidget";
import { NewsItemProps } from "./NewsItem";

// Отрисовывает список новостей
export default function NewsList({news}: {news: NewsItemProps[]}) {
    return  (
        <>
        <div className="news-list">
            {news.map(item=><NewsItem item={item}/>)}
        </div>
        <CurrencyWidget items={[]}/>
        </>
    )
}