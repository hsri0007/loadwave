import React, { Component } from 'react';
import './App.css';
import Upload from './Upload';
import Enterurl from './Enterurl';
import Projectitem from './Project';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Card">
          <Upload />
          <Enterurl/>
          
          <Projectitem/>
        </div>
       
      </div>
    )
  }
}

export default App;