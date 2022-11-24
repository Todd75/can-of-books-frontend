import React from 'react';
import { Container, Button, Form, Modal } from 'react-bootstrap';

class UpdateBookForm extends React.Component {
  render() {


    return(
        <Container>
          <Modal show={this.props.show} onHide={this.props.onHide} id="modalUpdateBook">
            <Modal.Header closeButton id="modalUpdateBookHeader">Update the Book</Modal.Header>
            <Form onSubmit={this.props.submit} id="formUpdateBook">
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label> 
                <Form.Control type="text" placeholder={this.props.books.title}></Form.Control>
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label> 
                <Form.Control type="text" placeholder={this.props.books.description}></Form.Control>
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Label>Status</Form.Label> 
                <Form.Control type="text" placeholder={this.props.books.status}></Form.Control>
              </Form.Group>
              <Button type="submit" onClick={this.props.onHide}>Update Book</Button>
            </Form>
          </Modal>
        </Container>
    )
  }
}

export default UpdateBookForm;
