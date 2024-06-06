import data from "../../../public/fma-data";
// import "./Table.css";
// need name, skillset, votes for each character

// let sortedArray = data.sort((a, b) => {
//   console.log(a, b);
//   console.log(b.votes, a.votes);
//   return b.votes - a.votes;
// });

// let characterVotes = data.map(
//   (mapItem) => mapItem
//   // mapItem.votes
// );
// console.log("this is characterVotes", characterVotes);
let sortedArray = data.sort((a, b) => b.votes - a.votes).slice(0, 5);

// let sortedArray = data.sort((a, b) => b - a);
console.log("this is sorted array", sortedArray);

// const tableData = data.map((mapItem) => {
const tableData = sortedArray.map((mapItem) => {
  // function that chooses every other element, tr class= dark or light
  //function that chooses top 5 votes and orders them
  // let characterVotes = data.map((mapItem) => {

  //     return(
  //         [
  //             mapItem,
  //             mapItem.votes
  //         ]
  //     )
  // }
  //     const sortedArray = .sort((a.votes, b.votes) => {
  //   return b.votes - a.votes;
  // });
  //   let MapItems = data.map((mapItems) => mapItems);
  //   console.log("this is MapItems:", MapItems);
  //   let sortedArray = mapItem.sort((a, b) => {
  //     b.votes - a.votes;
  //   });

  //   console.log("this is sorted array", sortedArray);

  //return the top 5 characters

  //characters, sorted, sliced to showed the top 5

  return (
    // {mapItem.sort((a,b)=>{b.votes - a.votes} )}
    <tr
      key={mapItem.name}
      className={data.indexOf(mapItem) % 2 === 0 ? "light" : "dark"}
    >
      <td>{mapItem.name}</td>
      <td>{mapItem.skillset}</td>
      <td>{mapItem.votes}</td>
    </tr>
  );
});

const Table = () => {
  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <tr>
          <th>Name</th>
          <th>Skillset</th>
          <th>Votes</th>
        </tr>
        {tableData}
      </table>
    </section>
  );
};

export default Table;
