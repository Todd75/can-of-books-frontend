import React from 'react';
import { Container, Button, Form, Modal } from 'react-bootstrap';

class UpdateBookForm extends React.Component {
  render() {

  handleBookSubmit = (e) => {
      e.preventDefault();
      
      let bookToUpdate = {
        title: e.target.title.value || this.props.books.title,
        description: e.target.description.value || this.props.books.title,
        status: e.target.status.value || this.props.books.status,
        _id: this.props.books._id,
        __v: this.props.books.__v
      };
      // send bookToUpdate to the server
    };


    return(
        <Container>
          <Modal show={this.props.show} onHide={this.props.onHide}>
            <Modal.Header>Update the Book</Modal.Header>
            <Form onSubmit={this.handleBookSubmit}>
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
