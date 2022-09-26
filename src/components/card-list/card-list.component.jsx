import { Component } from "react";
import CardItem from "../cardItem/card-item.component";
import './card-list.styles.css';
class CardList extends Component {

    render(){
       const { monsters }  = this.props;
       console.log(monsters);
    return (
        <div className="card-list">
          {monsters.map((monster) => {
          const { id, email, name } = monster;

          return (
              <CardItem 
                  cardName={name}
                  cardId={id}
                  cardEmail={email}
                />
          )
            })} 
        </div>
      )  
    }
}


export default CardList;
