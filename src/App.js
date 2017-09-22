import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './App.css';
import UserModal from './modal.js';

// User data
var userData = require('./data.json');

class App extends Component {
  render() {
    const userGroup = <ListGroup className="user-list">
                    {
                      userData.map(function(user) {
                        return <ListGroupItem key={ user.id }>
                                { user.name }
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
          <div className="col-md-12 text-center">
            <h2 >Users</h2>
            { userGroup }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
