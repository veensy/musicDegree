import React, { Component } from "react";

export class View extends Component {
  state = { title: "", bpm: "", field: [""] };

  addInput = async () => {
    await this.setState(
      {
        field: this.state.field.concat([""])
      },
      () => {
        this.refs["field" + (this.state.field.length - 1)].focus();
      }
    );
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

  removeInput = (e, index) => {
    let focused = document.hasFocus();
    console.log(e);
    if (!index) {
      index = this.state.field.length - 1;
      console.log("-1");
      // let newField = this.state.field.pop();
      this.setState({
        field: this.state.field.filter((stay, i) => index !== i)
      });
    }
  };
  test = e => {
    console.log("test39");
  };

  renderInput = () => {
    return (
      <div className="row col-12">
        {this.state.field.map((field, index) => {
          return (
            <div key={index} className="col-1 px-0 input__bar">
              <input
                type="text"
                className="form-control mb-5"
                placeholder="..."
                ref={"field" + index}
                value={field}
                width="100%"
                onChange={this.handleChangeInput(index)}
                onClick={e => this.test(index)}
              />
            </div>
          );
        })}
      </div>
    );
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
    console.log(this.state.field);
    return (
      <div className="col-12">
        <p className="mb-5">{this.renderHeader()}</p>
        <div className="row mt-5 mx-4 view__sheet">{this.renderInput()}</div>
      </div>
    );
  }
}

export default View;
