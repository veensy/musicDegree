import React, { Component } from "react";
import { Link } from "react-router-dom";
import Calendar from "../img/calendar";
import Microphone from "../img/microphone";
import Stage from "../img/stage";
import Notes from "../img/notes";
import Nav from "react-bootstrap/Nav";
import App from "../App";

export class LeftMenu extends Component {
  render() {
    return (
      <div className="left__menu row  ">
        <div className="col-2 bg-dark pr-2">
          <div className="mt-3 ml-3">
            <b className="text-muted">Library</b>
          </div>
          <div className="flex-column mt-3 ml-3">
            <Nav variant="pills" defaultActiveKey="/" className="flex-column">
              <Nav.Item>
                <Nav.Link href="/" className="link__leftmenu">
                  <Link to={"/"} className="d-flex flex-row">
                    <div className="icon__label mr-2">
                      <Calendar width={25} />
                    </div>
                    <div>Recently Added</div>
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/artists" className="link__leftmenu">
                  <Link to={"/artists"} className="d-flex flex-row">
                    <div className="icon__label mr-2">
                      <Microphone width={25} />
                    </div>
                    <div>Artists</div>
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/events" className="link__leftmenu">
                  <Link to={"/events"} className="d-flex flex-row">
                    <div className="icon__label mr-2">
                      <Stage width={25} />
                    </div>
                    <div>Events</div>
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/sheets" className="link__leftmenu">
                  <Link to={"/sheets"} className="d-flex flex-row">
                    <div className="icon__label mr-2">
                      <Notes width={25} />
                    </div>
                    <div>Sheets</div>
                  </Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
        <div className="col-10">
          <App />
        </div>
      </div>
    );
  }
}

export default LeftMenu;
