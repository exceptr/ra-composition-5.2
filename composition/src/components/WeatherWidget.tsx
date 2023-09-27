interface WeatherWidgetProps {
    icon: string;
    content: string
}

// Виджет погоды
export default function WeatherWidget({icon, content}: WeatherWidgetProps) {
    return (
        <div className="weather-widget">
            <img src={icon} alt="icon" />
            <div className="weather-widget-content">{content}</div>
        </div>
    )
}