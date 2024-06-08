import { data } from "../public/fma-data";
import "../style.css";
import "../reset.css";
import Header from "./components/header/Header";
import Table from "./components/table/Table";

//made a functional and class component for the cards, both work.
// import Cards from "./components/cards/Cards";
import { MakeCardsClass } from "./components/cards/CardsClass";

function App() {
  return (
    <>
      <Header />

      <Table data={data} />

      {/* <Cards data={data} /> */}
      <MakeCardsClass data={data} />
    </>
  );
}

export default App;
