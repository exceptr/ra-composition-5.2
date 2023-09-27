import CurrencyWidgetItem from "./CurrencyWidgetItem"
import { CurrencyWidgetItemProps } from "./CurrencyWidgetItem"

// Виджет для валют, нефти и т.д.
export default function CurrencyWidget({items}: {items: CurrencyWidgetItemProps[]}) {
    return (
        <div className="currency-widget">
            {items.map((item: CurrencyWidgetItemProps) =>
            <CurrencyWidgetItem 
            currency={item.currency}
            value={item.value}
            changes={item.changes}
            />)}
        </div>
    )
}