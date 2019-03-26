import React, { Component } from "react";
import {  Route, Switch } from "react-router-dom";
import Lastposts from "./COMPONENTS/Lastposts";
import Artists from "./COMPONENTS/Artists";
import Events from "./COMPONENTS/Events";
import Sheets from "./COMPONENTS/Sheets";
import Search from "./COMPONENTS/Search";
import NewSheet from "./COMPONENTS/NewSheet";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          
          <Route exact path="/search" component={Search} />
          <Route exact path="/newsheet" component={NewSheet} />
          <Route exact path="/" component={Lastposts} />
          <Route exact path="/artists" component={Artists} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/sheets" component={Sheets} />
        </Switch>
      </div>
    );
  }
}

export default App;
