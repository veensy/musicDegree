import React, { Component } from "react";
import del from "../img/eraser.png";
import previous from "../img/previous.png";
import next from "../img/next.png";

export class Edit extends Component {
  state = {
    KEY: ["A", "B", "C", "D", "E", "F", "G"],
    ALTERATION: ["#", "♭"],
    DELETE: [""],
    DEGREE: [1, 2, 3, 4, 5, 6, 7],
    PLUS: "+",
    MOINS: "-",
    SLASH: "/",
    SIGNATURE: [
      "2/2",
      "3/2",
      "2/4",
      "3/4",
      "4/4",
      "5/4",
      "6/4",
      "7/4",
      "3/8",
      "5/8",
      "6/8",
      "7/8",
      "9/8",
      "12/8"
    ],
    CHORDS: [
      "5",
      "2",
      "add9",
      "+",
      "o",
      "ø",
      "sus",
      " Δ",
      "-",
      " Δ7",
      "-7",
      "7",
      "7sus",
      "ø7",
      "o7",
      " Δ9",
      " Δ13",
      "6",
      "69",
      " Δ7#11",
      " Δ9#11",
      " Δ7#5",
      "-6",
      "-69",
      "-Δ7",
      "-Δ9",
      "-9",
      "-11",
      "-7b5",
      "ø9",
      "-b6",
      "-#5",
      "9",
      "7b9",
      "7#9",
      "7#11",
      "7b5",
      "7#5",
      "9#11",
      "9b5",
      "9#5",
      "7b13",
      "7#9#5",
      "7#9b5",
      "7#9#11",
      "7b9#11",
      "b9b5",
      "b9#5",
      "b9#9",
      "b9b13",
      "7alt",
      "13",
      "13#11",
      "13b9",
      "13#9",
      "7b9sus",
      "7susadd13",
      "9susadd13",
      "9sus",
      "13sus",
      "7b13sus",
      "11"
    ],
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
  sendToView = () => {};
  handleChangeNotes = e => {
    console.log(e.target.value);
  };
  handleChangeChords = e => {
    console.log(e.target.value);
  };
  handleChangeTitle = e => {
    this.setState(
      { newSheet: { ...this.state.newSheet, title: e.target.value } },
      () => {
        this.props.value(this.state.newSheet);
      }
    );
  };
  handleChangeBpm = e => {
    this.setState(
      { newSheet: { ...this.state.newSheet, bpm: e.target.value } },
      () => {
        this.props.value(this.state.newSheet);
      }
    );
  };
  handleChangeSignature = sig => {
    this.setState(
      { newSheet: { ...this.state.newSheet, signature: sig } },
      () => {
        this.props.value(this.state.newSheet);
      }
    );
  };
  handleChangeKeyNature = e => {
    let nat = "";
    if (e.target.checked) {
      nat = "m";
    }

    this.setState(
      { newSheet: { ...this.state.newSheet, keyNature: nat } },
      () => {
        this.props.value(this.state.newSheet);
      }
    );
  };
  handleChangeKeyAlteration = alt => {
    this.setState(
      { newSheet: { ...this.state.newSheet, keyAlteration: alt } },
      () => {
        this.props.value(this.state.newSheet);
      }
    );
  };
  handleChangeKey = key => {
    this.setState({ newSheet: { ...this.state.newSheet, key: key } }, () => {
      this.props.value(this.state.newSheet);
    });
  };
  eraseKeyAlteration = () => {
    this.setState(
      { newSheet: { ...this.state.newSheet, keyAlteration: "" } },
      () => {
        this.props.value(this.state.newSheet);
      }
    );
  };
  addInput =(value)=>{
    this.props.action(value)
  }
  render() {
    //console.log(this.state.newSheet);
    // console.log(this.props);

    return (
      <div>
        <div className="my-5 key__column ">
          <div className="col-12 row flex-nowrap">
            <div className="flex-column col-10">
              <span className="text-muted keys__degrees mb-2">
                Keys/Degrees
              </span>
              <div className="row  ml-1 mb-2 mt-2">
                {this.state.DEGREE.map((degre, index) => (
                  <button className="button__keyDeg " key={index}>
                    {degre}
                  </button>
                ))}

                {this.state.KEY.map((key, index) => (
                  <button className="button__keyDeg" key={index}>
                    {key}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-column col-2">
              <span className="text-muted keys__degrees mb-2 ml-n4">Prev/Next</span>
              <div className="row mb-2 mt-2">
                <button className="button__chords  flex-fill" onClick={e=>this.addInput("remove")}>
                  <img src={previous} alt="previous" width="16rem" />
                </button>
                <button className="button__chords  flex-fill" onClick={e=>this.addInput("add")}>
                  <img src={next} alt="next" width="16rem" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-12">
            <span className="text-muted keys__degrees">Chords</span>
            <div className="row mx-1 my-2 justify-content-between  ">
              {this.state.CHORDS.map((degre, index) => (
                <button className="button__chords  flex-fill" key={index}>
                  {degre}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="my-5 key__column ">
          <div className="col-12">
            <span className="text-muted keys__degrees">Signature</span>
            <div className="row mx-1 my-2 justify-content-between  ">
              {this.state.SIGNATURE.map((sig, index) => (
                <button
                  className="button__chords  flex-fill"
                  key={index}
                  onClick={e => this.handleChangeSignature(sig)}
                >
                  {sig}
                </button>
              ))}
            </div>
          </div>

          <div className="row mx-1">
            <div className="col-9 mb-2">
              <span className="text-muted keys__degrees">Title</span>
              <input
                type="text"
                className="form-control"
                placeholder="..."
                onChange={this.handleChangeTitle}
              />
            </div>
            <div className="col-3">
              <span className="text-muted keys__degrees">Bpm</span>
              <input
                type="text"
                className="form-control"
                placeholder="..."
                onChange={this.handleChangeBpm}
              />
            </div>
          </div>
          <div className="col-12">
            <span className="text-muted keys__degrees">Key</span>
            <div className="row mx-1 my-2 justify-content-between  ">
              {this.state.KEY.map((key, index) => (
                <button
                  className="button__chords  flex-fill"
                  key={index}
                  onClick={e => this.handleChangeKey(key)}
                >
                  {key}
                </button>
              ))}
              {this.state.ALTERATION.map((alt, index) => (
                <button
                  className="button__chords  flex-fill"
                  key={index}
                  onClick={e => this.handleChangeKeyAlteration(alt)}
                >
                  {alt}
                </button>
              ))}
              <button
                className="button__chords  flex-fill"
                onClick={this.eraseKeyAlteration}
              >
                <img src={del} alt="delete" width="16rem" />
              </button>
            </div>
          </div>
          <div>
            <div className="form-check ml-4">
              <input
                className="form-check-input"
                type="checkbox"
                value="m"
                onChange={this.handleChangeKeyNature}
                defaultChecked={false}
              />
              <label
                className="form-check-label text-muted"
                htmlFor="inlineRadio2"
              >
                Mineur
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
