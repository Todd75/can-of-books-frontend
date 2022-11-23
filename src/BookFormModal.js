import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';


class BookFormModal extends React.Component {

    render() {





        return (
            <>
                <Modal show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header>
                        Add A Book to the DataBase
                    </Modal.Header>
                    <Form onSubmit={this.props.submit} >
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group controlId="status">
                            <Form.Label>Status</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Button type="submit" variant="primary">Submit</Button>
                        <Button typ="submit" onClick={this.props.onHide}>Close Form</Button>
                    </Form>
                </Modal>
            </>


        )

    }
}

export default BookFormModal;



