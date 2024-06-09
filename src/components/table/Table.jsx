// functional component
import "./Table.css";
// need name, skillset, votes for each character

export const Table = (data) => {
  //function that chooses top 5 votes and orders them
  let sortedArray = data.data.sort((a, b) => b.votes - a.votes).slice(0, 5);

  const tableData = sortedArray.map((mapItem) => {
    // function that chooses every other element, tr class= dark or light
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
