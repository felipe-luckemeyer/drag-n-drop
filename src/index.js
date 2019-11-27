import React from "react";
import ReactDOM from "react-dom";
import "@atlaskit/css-reset";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./assets/initial-data";
import Column from "./column";
import Home from "./home";

class App extends React.Component {
  render() {
    return <Home />;
  }
}

ReactDOM.render(<App />, document.getElementById("boot"));
