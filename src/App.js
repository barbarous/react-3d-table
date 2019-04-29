import React from "react";
import "./App.css";
import Row from "./Row.js";

class MyTable extends React.Component {
  static counter = 0;

  render() {
    const elements = [
      { name: "Serge", sirname: "Isachanka", age: "36" },
      { name: "Olga", sirname: "Isachanka", age: "38" }
    ];
    let items = [];

    items.push(
      <tbody key={"header"}>
        <tr>
          <th />
          <th>Name</th>
          <th>Second name</th>
          <th>Age</th>
        </tr>
      </tbody>
    );

    for (let object of elements) {
      items.push(<Row key={"row_" + Row.counter++} object={object} />);
    }

    return <table>{items}</table>;
  }
}

export default MyTable;
