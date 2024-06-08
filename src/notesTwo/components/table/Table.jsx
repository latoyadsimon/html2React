// import data from "../../../public/fma-data";

// functional component
import "./Table.css";
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
// let data = { data };
// console.log("this is data from table:", data);
// let sortedArray = data.sort((a, b) => b.votes - a.votes).slice(0, 5);

// let sortedArray = data.sort((a, b) => b - a);
// console.log("this is sorted array", sortedArray);

// const tableData = data.map((mapItem) => {

export const Table = (data) => {
  console.log("this is data in the table:", data.data);
  let sortedArray = data.data.sort((a, b) => b.votes - a.votes).slice(0, 5);
  console.log("this is sorted array", sortedArray);

  const tableData = sortedArray.map((mapItem) => {
    // function that chooses every other element, tr class= dark or light
    //function that chooses top 5 votes and orders them

    return (
      <tr
        key={mapItem.name}
        className={data.data.indexOf(mapItem) % 2 === 0 ? "dark" : "light"}
      >
        <td>
          {mapItem.name}{" "}
          {mapItem.nickName ? '"' + mapItem.nickName + '"' : null}
        </td>
        <td>{mapItem.skillset.join(", ")}</td>
        <td>{mapItem.votes}</td>
      </tr>
    );
  });

  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
          {tableData}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
