import React, { Component } from "react";
import { ListGroup, Button, Container } from "react-bootstrap";


class AddBook extends Component {

    render() {
        let books = this.props.books.map((book) => (
            <Book
                book={book}
                key={book._id}
                handleDeleteBook={this.props.handleDeleteBook}
            />
        ));
        return (
            <Container id="bookDataContainer">
                <ListGroup id="bookData">
                    {books}
                </ListGroup>
            </Container>
        );
    }
}
class Book extends React.Component {
    render() {
        return (
            <ListGroup.Item>
                <Button
                    className="custom-btn btn-12"
                    onClick={() => this.props.handleDeleteBook(this.props.book._id)}
                    id="deleteButton"
                >
                </Button>
            </ListGroup.Item>
        )
    }
}
export default AddBook;
