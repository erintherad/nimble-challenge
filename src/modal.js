import React from 'react';
import { Table, Modal, Button } from 'react-bootstrap';

export default class UserModal extends React.Component {

  constructor() {
    super();
    this.defaultProps = {
      showModal: false,
      name: "",
      status: "",
      applicationDate: "",
      location: ""
    };

    this.state = {
      showModal: false
    };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {

    return (
      <div>
        // creates clickable glyphicon for each user
        <a onClick={ this.open.bind(this) }><span className="glyphicon glyphicon-menu-hamburger pull-right">  </span></a>

        // Creates modal with user info
        <Modal show={ this.state.showModal } onHide={ this.close.bind(this) }>
          <Modal.Header closeButton>
            <Modal.Title>{ this.props.name }</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table>
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Appliation Date</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{ this.props.status }</td>
                  <td>{ this.props.applicationDate }</td>
                  <td>{ this.props.location }</td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ this.close.bind(this) }>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};
