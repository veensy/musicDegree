import React, { Component } from "react";
import { Link } from "react-router-dom";
import calendar from "../img/calendar.svg";
import microphone from "../img/microphone.svg";
import stage from "../img/stage.svg";
import notes from "../img/notes.svg";
import Nav from "react-bootstrap/Nav";
import App from "../App";

export class LeftMenu extends Component {
  render() {
    return (
      <div className="left__menu row">
        <div className="col-2 bg-dark ">
          <div className="mt-3 ml-3">
            <b className="text-muted">Library</b>
          </div>
          <div className="flex-column mt-3 ml-3">
            <Nav variant="pills" defaultActiveKey="/" className="flex-column">
              <Nav.Item>
                <Nav.Link href="/" className="link__leftmenu">
                  <Link to={"/"} className="d-flex flex-row">
                    <div>
                      <img
                        src={calendar}
                        className="icon__label mr-2"
                        alt="calendar"
                      />
                    </div>
                    <div>Recently Added</div>
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/artists" className="link__leftmenu">
                  <Link to={"/artists"} className="d-flex flex-row">
                    <div>
                      <img
                        src={microphone}
                        className="icon__label mr-2"
                        alt="microphone"
                      />
                    </div>
                    <div>Artists</div>
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/events" className="link__leftmenu">
                  <Link to={"/events"} className="d-flex flex-row">
                    <div>
                      <img
                        src={stage}
                        className="icon__label mr-2"
                        alt="stage"
                      />
                    </div>
                    <div>Events</div>
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/sheets" className="link__leftmenu">
                  <Link to={"/sheets"} className="d-flex flex-row">
                    <div>
                      <img
                        src={notes}
                        className="icon__label mr-2"
                        alt="notes"
                      />
                    </div>
                    <div>Sheets</div>
                  </Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
        <div>
          <App />
        </div>
      </div>
    );
  }
}

export default LeftMenu;
