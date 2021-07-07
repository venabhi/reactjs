import React from "react";
import ReactDOM from "react-dom";
import seasonDisplay from "./seasonDisplay";
import "semantic-ui-css/semantic.min.css";
import Spin from "./spinner";

class App extends React.Component {
  // we can  refactor the state intialisation much better using state do not need constructor
  state = { lat: null };
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       lat: null,
  //       errorMessage: "",
  //     };
  //   }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      //   err => console.log(err)
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.State.lat && !this.State.errorMessage) {
      //   we are assign state as a prop to the other component then  if state updates then the state prop of other component will also update
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spin message="please wiat utill loading" />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
