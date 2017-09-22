import React, { Component } from 'react';
import './App.css';
import UserModal from './modal.js';
import { Button, Modal } from 'react-bootstrap';

// User data
var userData = require('./data.json');
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

class App extends Component {
  render() {
    const table = <BootstrapTable data={ userData } striped hover condensed>
                  <TableHeaderColumn isKey dataField='name'>Applicant</TableHeaderColumn>
                  <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
                  <TableHeaderColumn dataField='applicationDate'>Application Date</TableHeaderColumn>
                  <TableHeaderColumn dataField='location'>Location</TableHeaderColumn>
                </BootstrapTable>

    return (
      <div className="App container-fluid">
        <div className="row table-row">
          <div id="user-table">
            <h2>Users</h2>
            { table }
            <UserModal />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
