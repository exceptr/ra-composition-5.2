import WeatherWidget from "./WeatherWidget";
import WidgetItem from "./WidgetItem";

// Отображение всех виджетов
export default function WidgetSection() {
    return (
        <div className="widget-section">
            <WeatherWidget icon={""} content={""} />
            <WidgetItem title='Посещаемое' link='#' content='Text' />
            <WidgetItem title='Карта Германии' link='#'content='Text' />
            <WidgetItem title='Телепрограмма' link='#' content='Text' />
            <WidgetItem title='Эфир' link='#' content='Text' />
        </div>
    )
}