import React, { Component } from 'react';
import './App.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

// User data
var userData = require('./data.json');

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Users</h2>
      </div>
    );
  }
}

export default App;
