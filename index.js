import React from "react";
import ReactDOM from "react-dom";

// import React from "react";
// import ReactDom from "react-dom";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state={
//       lat:null,
//       errMessage:''
//     };

//   window.navigator.geolocation.getCurrentPosition(
//     position => {
//       this.setState({lat:position.coords.latitude})
//     },
//     err => {
//       this.setState(errorMessage.err.message)
//     }

//   );
// }

//   render() {

//   }

// }
// ReactDOM.render( <App/>,)

//  to get the current location we need to call the api of geolocatio site
//  we can configure the locationj properties and re-render the app
//  using the fun we cant re-render the current app the option is class method

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      errorMessage: "",
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      //   err => console.log(err)
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    // window.navigator.geolocation.getCurrentPosition(
    //   (position) => console.log(position),
    //   (err) => console.log(err)
    // );
    return (
      <div>
        Latitude:{this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

//   return <div>Latitude:</div>;

ReactDOM.render(<App />, document.querySelector("#root"));

// window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
// )

// window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(postion),
//     (err) => console.log(err)
// );
//  conditional error

// render () {
//     if (this.state.errorMessage && !this.state.lat) {
//         return <div>{this.state.lat}</div>
//     }
// }
