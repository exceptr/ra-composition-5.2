export interface CurrencyWidgetItemProps {
    currency: string;
    value: string;
    changes: string;
}

// Отрисовывает одну валюту, нефть и т.д
export default function CurrencyWidgetItem({currency, value, changes} : CurrencyWidgetItemProps) {
    return (
        <div className="CurrencyWidgetItem">
            <span>{currency}</span>
            <span>{value}</span>
            <span>{changes}</span>
        </div>
    )
}