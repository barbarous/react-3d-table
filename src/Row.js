import React from "react";

class Row extends React.Component {
  constructor(object) {
    super();
    this.object = object;
  }

  state = {
    collapseButtonValue: "+",
    displayColspanRow: "none"
  };

  static counter = 0;

  clickOnDetails() {
    if (this.refs.colspanRow.style.display !== "none") {
      this.setState({ collapseButtonValue:"+" });
      this.setState({ displayColspanRow: "none"});
    } else {
      this.setState({ collapseButtonValue:"-" });
      this.setState({ displayColspanRow: ""});
    }
  }

  render() {
    let item = [];

    item.push(
      <tr key={"tr_" + Row.counter++}>
        <td>
          <input type="button" onClick={() => this.clickOnDetails()} value={this.state.collapseButtonValue}></input>
        </td>
        <td>{this.object.object.name}</td>
        <td>{this.object.object.sirname}</td>
        <td>{this.object.object.age}</td>
      </tr>
    );

    item.push(
      <tr
        key={"trcolspan_" + Row.counter++}
        className="colspanRow"
        ref="colspanRow"
        style={ { display: `${ this.state.displayColspanRow }` } }
      >
        <td colSpan={`${Object.keys(this.object.object).length + 1}`}>
          {Object.keys(this.object.object).length + 1}
        </td>
      </tr>
    );

    return <tbody>{item}</tbody>;
  }
}

export default Row;
