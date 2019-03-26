import React, { Component } from "react";

export class View extends Component {
  state = { title: "", bpm: "", field: [""] };

  addInput = async () => {
    if (this.props.action === "add") {
      console.log(this.state.field);

      await this.setState(
        {
          field: this.state.field.concat([""])
        },
        () => {
          console.log(this.state.field);
          this.refs["field" + (this.state.field.length - 1)].focus();
        }
      );
    }
  };

  handleChangeInput = index => e => {
    const newField = this.state.field.map((field, idx) => {
      if (index !== idx) {
        return field;
      } else {
        return e.target.value;
      }
    });
    this.setState({
      field: newField
    });
  };

  renderInput = () => {
    if (this.props.action === "add") {
      this.addInput(this.props.action);
      return (
        <div>
          {this.state.field.map((field, index) => {
            return (
              <input
                type="text"
                className="form-control col-1"
                placeholder="..."
                ref={"field" + index}
                value={field}
                onChange={this.handleChangeInput(index)}
              />
            );
          })}
        </div>
      );
    }
    if (this.props.action === "remove") {
      console.log("remove");
    }
  };

  renderHeader = () => {
    if (this.props.data) {
      let title = this.props.data.title.toString();
      let bpm = this.props.data.bpm.toString();
      let key = this.props.data.key.toString();
      let alt = this.props.data.keyAlteration.toString();
      let nat = this.props.data.keyNature.toString();
      let sig = this.props.data.signature.toString();

      return (
        <div className="row mr-5 ml-3 mt-2">
          <div className="col-4">
            BPM : {bpm} <br />
            Time : {sig}
          </div>

          <div className="col-4 text-center">{title}</div>
          <div className="col-4 text-right">
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
    //console.log(this.state.field);
    return (
      <div className="col-12">
        <p>{this.renderHeader()}</p>
        <div className="mt-5 mx-4">
          <p>{this.renderInput()}</p>
        </div>
      </div>
    );
  }
}

export default View;
