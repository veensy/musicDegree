import React, { Component } from "react";

export class View extends Component {
  state = { title: "", bpm: "" };
  render = () => {
    console.log(this.props.data);
    if (this.props.data) {
      let title = this.props.data.title.toString();
      let bpm = this.props.data.bpm.toString();
      let key = this.props.data.key.toString();
      let alt = this.props.data.keyAlteration.toString();
      let nat = this.props.data.keyNature.toString();
      let sig = this.props.data.signature.toString();

      return (
        <div className="row mr-5 ml-3 mt-2">
          <div className=" col-4">
            BPM : {bpm} <br />
            Time : {sig}
          </div>

          <div className="col-4 text-center ">{title}</div>
          <div className="col-4 text-right ">
            <p>
              Key : {key}
              <span class="supsub">
                <sup class="superscript">{alt}</sup>
                <sub class="subscript">{nat}</sub>
              </span>
            </p>
          </div>
        </div>
      );
    } else {
      return "";
    }
  };
  render() {
    return (
      <div className="col-12">
        <p>{this.render()}</p>
        <input
          type="text"
          className="form-control"
          placeholder="..."
          onChange={this.handleChangeTitle}
        />
      </div>
    );
  }
}

export default View;
