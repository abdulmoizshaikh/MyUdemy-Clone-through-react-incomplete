import React, { Component } from 'react';
import Routes from './Routes';


var divStyle = {
  textAlign: "center"
}




class App extends Component {
  render() {
    return (
      <div className="App" style={divStyle}>
        {/* <p>App Component</p> */}
        <Routes />
      </div>
    );
  }
}

export default App;
