import SearchItem from "./SearchItem"

// Блок поиска
export default function Search() {
    return (
        <div className="search">
            <img src='#' className="search-logo" ></img>
            <div className="search-form">
                <SearchItem name='Видео' link='#' />
                <SearchItem name='Картинки' link='#' />
                <SearchItem name='Новости' link='#' />
                <SearchItem name='Карты' link='#' />
                <SearchItem name='Маркет' link='#' />
                <SearchItem name='Переводчик' link='#' />
                <SearchItem name='Эфир' link='#' />
                <SearchItem name='еще' link='#' />
            </div>
            <input className="search-input" type="text" />
            <button className="search-input-button">Найти</button>
            <div className="search-sub-title">Найдётся всё...</div>
        </div>
    )
}