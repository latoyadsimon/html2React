// import { Component } from "react";
// import data from "../public/fma-data";
import { data } from "../public/fma-data";
import "../style.css";
import "../reset.css";
import Header from "./components/header/Header";
import Table from "./components/table/Table";
// import Cards from "./components/cards/Cards";
import { MakeCardsClass } from "./components/cards/CardsClass";

// import './App.css';

// const { Table } = Table;
console.log(data);

function App() {
  //   console.log(data);
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
