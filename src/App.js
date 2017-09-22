import React, { Component } from 'react';
import './App.css';

// User data
var userData = require('./data.json');
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

class App extends Component {
  render() {
    return (
      <div className="App">
        <BootstrapTable data={userData} striped hover>
          <TableHeaderColumn isKey dataField='id'>ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Applicant</TableHeaderColumn>
          <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default App;
