// making a class component
import data from "../../../public/fma-data";
// import React from "react";
import { Component } from "react";
// import "./Cards.css";
// instead of importing data, can we import the data in a parent component and pass it as props?

export class MakeCardsClass extends Component {
  // constructor that handles state
  //may need to use this.props
  render() {
    const makeCards = data.map((mapItem) => {
      //   console.log(mapItem.imageUrl);
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

    // const Cards = () => {
    return <section id="character-cards">{makeCards}</section>; // we can just return this rather than having a functional component in a class component
    // };
    // return Cards;
  }
}

// export default Cards;
