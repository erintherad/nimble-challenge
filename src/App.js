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
        <BootstrapTable data={userData} striped hover version='4'>
          <TableHeaderColumn isKey dataField='id'>ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Applicant</TableHeaderColumn>
          <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
          <TableHeaderColumn dataField='applicationDate'>Application Date</TableHeaderColumn>
          <TableHeaderColumn dataField='location'>Location</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default App;
