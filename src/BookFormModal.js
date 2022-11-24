import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import './App.css';


class BookFormModal extends React.Component {

    render() {

        return (
            <>
                <Modal show={this.props.show} onHide={this.props.onHide} id="modalAddBook">
                    <Modal.Header id="addHeader">
                        Add A Book to the DataBase:
                    </Modal.Header>
                    <Form onSubmit={this.props.submit} id="formAddBook">
                        <Form.Group controlId="title" >
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Add the Title Here"/>
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Add a Description Here"/>
                        </Form.Group>
                        <Form.Group controlId="status">
                            <Form.Label>Status</Form.Label>
                            <Form.Control type="text" placeholder="Read or Unread Here"/>
                        </Form.Group>
                        <Button type="submit" variant="primary">Submit</Button>
                        <Button type="submit" onClick={this.props.onHide}>Close Form</Button>
                    </Form>
                </Modal>
            </>
        )
    };
};

export default BookFormModal;
