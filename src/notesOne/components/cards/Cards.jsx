import data from "../../../public/fma-data";
// import "./Cards.css";

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

const Cards = () => {
  return <section id="character-cards">{makeCards}</section>;
};

export default Cards;
