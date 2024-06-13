// functional component
import "./Cards.css";

const Cards = ({ character }) => {
  console.log("this is data in cards:", character);
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
};

export default Cards;
