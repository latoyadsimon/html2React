// functional component
import "./Table.css";
// the table needs name, nickname, skillset, and votes for each character

export const Table = ({ character }) => {
  //function that chooses top 5 votes and orders them
  const characterCopy = character.slice();
  let sortedArray = characterCopy.sort((a, b) => b.votes - a.votes).slice(0, 5);

  const tableData = sortedArray.map((mapItem, index) => {
    // function that chooses every other element, tr class= dark or light
    return (
      <tr key={mapItem.name} className={index % 2 === 0 ? "dark" : "light"}>
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
