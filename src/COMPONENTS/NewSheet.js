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
    },
    action: ""
  };
  value = value => {
    this.setState({ newsheet: value });
  };
  add = value => {
    this.refs.call.addInput(value)
  };
  remove = value =>{
    console.log("test");
    
    this.refs.call.removeInput(value)
  }

  render() {
    return (
      <div className="row flex-nowrap">
        <div className="col-4 new__sheet">
          <Edit value={this.value} add={this.add} remove={this.remove}/>
        </div>
        <div className="col-8 view">
          <View data={this.state.newsheet} ref="call" />
        </div>
      </div>
    );
  }
}

export default NewSheet;
