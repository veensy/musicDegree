import React, { Component } from "react";
import Edit from "./Edit";
import View from "./View";

export class NewSheet extends Component {
  state = {
    newSheet: {
      title: "",
      key: "",
      bpm: "",
      signature: "",
      chords: [],
      keyNature: "",
      keyAlteration: ""
    }
  };
  value = value => {

    this.setState({ newsheet: value });
  
  };
  render() {
    return (
      <div className="row flex-nowrap">
        <div className="col-4 new__sheet">
          <Edit value={this.value} />
        </div>
        <div className="col-8 view">
          <View data={this.state.newsheet} />
        </div>
      </div>
    );
  }
}

export default NewSheet;
