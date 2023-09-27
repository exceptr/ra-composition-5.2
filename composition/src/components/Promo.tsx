import WidgetItem from "./WidgetItem";
import { WidgetItemProps } from "./WidgetItem";


// Отрисовка рекламных блоков
export default function Promo({item}: {item: WidgetItemProps}) {
    const {logo} = item;
    return (
        <div className="promo">
            <img src={logo} alt="Logo" />
            <WidgetItem title={item.title} content={item.content} link={item.link}/>
        </div>
    )
}