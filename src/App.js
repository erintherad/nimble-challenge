import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './App.css';

// modal
import UserModal from './modal.js';

// User data
var userData = require('./data.json');

class App extends Component {
  render() {
    // creates user group
    const userGroup = <ListGroup className="user-list text-left">
                    {
                      userData.map(function(user) {
                        return <ListGroupItem key={ user.id }>
                                <span className="pull-left">{ user.name }</span>
                                <UserModal
                                  name={ user.name }
                                  status={ user.status }
                                  applicationDate={ user.applicationDate }
                                  location={ user.location}
                                />
                              </ListGroupItem>
                      })
                    }
                  </ListGroup>

    return (
      <div className="container">
        <div className="list-row row">
          <div className="col-md-12">
            <h2 className="text-center">Users</h2>
            { userGroup }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
