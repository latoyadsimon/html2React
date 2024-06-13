// class component

import { Component } from "react";
import "./Cards.css";
// instead of importing data up here, we import the data in a parent component and pass it as props

export class MakeCardsClass extends Component {
  //may need to use this.props
  render() {
    const { character } = this.props;
    console.log("this is character in cardsClass:", { character });

    const makeCards = character.map((mapItem) => {
      return (
        <div className="card" key={mapItem.name}>
          {/* <!-- Card 1 --> */}
          <div className="card-titles">
            {/* <!-- name --> */}
            <h3>{mapItem.name}</h3>
            {/* <!-- nickname --> */}
            <h4>{mapItem.nickName}</h4>
          </div>
          {/* <!-- imageUrl --> */}
          <img src={mapItem.imageUrl} alt={mapItem.name} />
          <p>
            {/* <!-- description --> */}
            {mapItem.background}
          </p>
        </div>
      );
    });

    return <section id="character-cards">{makeCards}</section>;
  }
}
