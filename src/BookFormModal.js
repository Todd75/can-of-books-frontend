import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import './App.css';
import './BookFormModal.css'
// import GridLayout from "react-grid-layout";

class BookFormModal extends React.Component {

    render() {

        return (
            <>

                <Modal show={this.props.show} onHide={this.props.onHide} centered id="modalAddBook">
                    <Modal.Header id="addHeader">
                        Add A New Book to the DataBase:
                    </Modal.Header>
                    <Form onSubmit={this.props.submit} id="formAddBook">
                        <Form.Group controlId="title" >
                            <Form.Label alt="title">Book Title:</Form.Label>
                            <Form.Control type="text" placeholder="Add the Title Here" />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label alt="description">Book Description:</Form.Label>
                            <Form.Control type="text" placeholder="Add a Description Here" />
                        </Form.Group>
                        <Form.Group controlId="status">
                            <Form.Label>Have You Read This Book?</Form.Label>
                            <Form.Control type="text" placeholder="Yes or No" />
                        </Form.Group>
                        <Button type="submit" variant="primary" id="submitBookBtn" onClick={this.props.onHide} >Submit Book</Button>
                        <Button onClick={this.props.onHide} variant="secondary" id="exitFormBtn">Exit Form</Button>
                    </Form>
                </Modal>
            </>
        )
    };
};

export default BookFormModal;
