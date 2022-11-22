import React, { Component } from "react";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import axios from 'axios';
import { ListGroup } from "react-bootstrap";


class AddBook extends Component {

    render () {
        let books = this.props.books.map((book) => (
            <Book 
            book={book}
            key={book._id}
            // deleteBook={this.props.deleteBook}
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

