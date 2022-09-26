import { Component } from "react";
import './card-item.styles.css'

class CardItem extends Component{

    render(){
        const { cardId, cardEmail, cardName } = this.props;
        return(
            <div className="card-container" key={cardId}>
                <img 
                    alt={`Monster ${cardName}`}
                    src={`https://robohash.org/${cardId}?set=set2&size=180x180`}
                  />
                  <h2>{cardName}</h2>
                  <p>{cardEmail}</p>
            </div>
        )
    }
}

export default CardItem;