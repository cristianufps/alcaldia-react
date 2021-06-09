import { CardOption } from "../components/CardOption";
import { Section } from "../components/Section";
import cards from "../card.json";
import './styles/AsiVamos.css'
export function AsiVamos() {
    return (
        <div className="containerY">
            <Section />
            <div className="grid_container">
                {cards.map((card) => (
                    <CardOption key={card.id} url={card.url} img={card.urlImg} title={card.title} />
                ))}
            </div>
        </div>
    )
}
