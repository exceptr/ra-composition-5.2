import NewsList from "./NewsList"
import Promo from "./Promo"
import Search from "./Search"
import PromoBanner from "./PromoBanner"
import WidgetSection from "./WidgetSection"

// Основной контент страницы
export default function MainPage() {
    return (
        <div className="Main-page">
            <div className="container">
                <NewsList news={[{logo:'', title:'NewsList', link:''}]}/>
                <Promo item={{title:'Text', content:'text text', link:''}}/>
            </div>
            <Search/>
            <PromoBanner img={""} link={""}/>
            <WidgetSection/>
        </div>
    )
}