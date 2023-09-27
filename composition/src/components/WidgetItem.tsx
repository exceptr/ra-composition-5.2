export interface WidgetItemProps {
    logo?: string;
    title: string;
    content: string;
    link: string;
}

// Отрисовывает один виджет
export default function WidgetItem({title, content, link}: WidgetItemProps) {
    return (
        <div className="widget-item">
            <a href={link}><h2 className="widget-item-title">{title}</h2></a>
            <div className="widget-item-content">
                <div>{content}</div>
            </div>
        </div>
    )
}