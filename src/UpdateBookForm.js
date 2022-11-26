import React from 'react';
import { Container, Form, Modal } from 'react-bootstrap';
import './UpdateBookForm.css'
class UpdateBookForm extends React.Component {
  render() {


    return (
      <Container>
        <Modal show={this.props.show} onHide={this.props.onHide} id="modalUpdateBook" centered>
          <Modal.Header closeButton id="modalUpdateBookHeader">Update This Book's Information:</Modal.Header>
          <Form onSubmit={this.props.submit} id="formUpdateBook">
            <Form.Group controlId="title">
              <Form.Label>Book Title:</Form.Label>
              <Form.Control type="text" placeholder={this.props.books.title}></Form.Control>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Book Description:</Form.Label>
              <Form.Control type="text" placeholder={this.props.books.description}></Form.Control>
            </Form.Group>
            <Form.Group controlId="status">
              <Form.Label>Have You Read This Book?</Form.Label>
              <Form.Control type="text" placeholder={this.props.books.status}></Form.Control>
            </Form.Group>
            <button id="saveBtn" type="submit" onClick={this.props.onHide}><span id="saveBtnSpan">Save Changes</span></button>
          </Form>
        </Modal>
      </Container>
    )
  }
}

export default UpdateBookForm;
