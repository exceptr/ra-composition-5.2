interface SearchItemProps {
    name: string;
    link: string;
}

// Отображает категории поиска
export default function SearchItem({name, link}: SearchItemProps) {
    return (
        <div className="search-item">
            <a href={link}>{name}</a>
        </div>
    )
}