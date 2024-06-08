import data from "../public/fma-data";
// import { data } from "../public/fma-data";
// import { Component } from "react";

import Header from "./components/header/Header";
import Table from "./components/table/Table";
import Cards from "./components/cards/Cards";
// import { MakeCardsClass } from "./components/cards/CardsClass";
// import './App.css';
// import "../reset.css";
// import "../style.css";
function App() {
  return (
    <>
      <Header data={data} />

      <Table data={data} />

      <Cards data={data} />
      {/* <MakeCardsClass  data={data}/> */}
    </>
  );
}

export default App;
