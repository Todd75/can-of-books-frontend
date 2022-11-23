import React, { Component } from "react";

import { ListGroup, Button, Container } from "react-bootstrap";


class AddBook extends Component {

    render () {
        let books = this.props.books.map((book) => (
            <Book 
            book={book}
            key={book._id}
            handleDeleteBook={this.props.handleDeleteBook}
            />
        ));
        return (
            <Container>
                <ListGroup>
                    {books}
                </ListGroup>
            </Container>
         );
    }
}
class Book extends React.Component {
    render () {
        return (
            <ListGroup.Item>
                <Button 
                    onClick={() => this.props.handleDeleteBook(this.props.book._id)}
                  >
                    Delete a Book
                  </Button>
            </ListGroup.Item>
        )
    }
}
export default AddBook;
