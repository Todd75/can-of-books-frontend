import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import BookFormModal from './BookFormModal.js';
import UpdateBookForm from './UpdateBookForm.js';
import Image from 'react-bootstrap/Image'
import './App.css'



let axios = require('axios');
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      updatedBook: null
    }
  }

  handleUpdateBook = (bookToUpdate) => {
    this.setState({
      updatedBook: bookToUpdate
    });
    this.props.openUpdateBookModal();
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  getBooks = async () => {
    let url = `${process.env.REACT_APP_SERVER_URL}/books`;
    try {
      let result = await axios.get(url);

      this.setState({ books: result.data });
      this.setState({ error: false });

    } catch (error) {
      console.error(error);
      this.setState({ error: true });
    }
  };

  postBooks = async (aBook) => {
    let url = `${process.env.REACT_APP_SERVER_URL}/books`;
    try {
      let postResult = await axios.post(url, aBook);
      this.setState({
        books: [...this.state.books, postResult]
      });
    } catch (err) {
      console.log(err);
      this.setState({ error: true });
    };
  };

  componentDidMount = async () => {
    this.getBooks();
  }

  handleBookSubmit = (event) => {
    event.preventDefault();
    let newBook = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value
    }
    console.log(newBook);
    this.postBooks(newBook);
  }

  deleteBook = async (id) => {
    try {
      console.log(this.state.books);
      let url = `${process.env.REACT_APP_SERVER_URL}/books/${id}`;

      await axios.delete(url);

      let updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: updatedBooks
      })
    } catch (err) {
      console.log('We have an error: ', err.response.data);
    }
  }

  handleUpDateBookSubmit = (e) => {
    e.preventDefault();

    let bookToUpdate = {
      title: e.target.title.value || this.state.updatedBook.title,
      description: e.target.description.value || this.state.updatedBook.description,
      status: e.target.status.value || this.state.updatedBook.status,
      _id: this.state.updatedBook._id,
      __v: this.state.updatedBook.__v
    };
    this.updatedBooks(bookToUpdate);
  };

  updatedBooks = async (bookToUpdate) => {
    try {
      let url = `${process.env.REACT_APP_SERVER_URL}/books/${bookToUpdate._id}`;
      let updatedBookObj = await axios.put(url, bookToUpdate);

      let updatedBookArr = this.state.books.map(book => {
        return book._id === bookToUpdate._id
          ? updatedBookObj.data
          : book;
      });
      this.setState({
        books: updatedBookArr
      });
    } catch (error) {
      console.log('Error: ', error.response.data);
    }
  }

  render() {

    return (
      <>
        <div className='light x1'></div>
        <div className='light x2'></div>
        <div className='light x3'></div>
        <div className='light x4'></div>
        <div className='light x5'></div>
        <div className='light x6'></div>
        <div className='light x7'></div>
        <div className='light x8'></div>
        <div className='light x9'></div>




        {this.state.books.length > 0 ? (

          <Carousel
            variant="dark"
            slide={false}



          >
            {this.state.books.map((oneBook, idx) => (
              <Carousel.Item key={idx}>
                <Image
                  className="d-block w-90"
                  src="https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_960_720.jpg"
                  alt="book placeholder"
                  fluid="true"
                  height="500px"
                />
                <Carousel.Caption id="bookNameID">
                  <h3>Book Title: {oneBook.title}</h3>
                  <h3>Book Description: {oneBook.description}</h3>
                  <h3>Have You Read This Book? {oneBook.status}</h3>
                  <button id="neonShadow" type="submit" onClick={() => this.deleteBook(oneBook._id)}><span id="span2">Remove Book</span></button>
                  <Button id="updateButton" onClick={() => this.handleUpdateBook(oneBook)} className="custom-btn btn-3">
                    <span>
                      Update Book
                    </span>
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>

        ) : (
          <h3>No Books Found</h3>
        )}
        <BookFormModal
          show={this.props.showAddBookModal}
          onHide={this.props.closeAddBookModal}
          submit={this.handleBookSubmit}
        />

        <UpdateBookForm
          show={this.props.showUpdateBookModal}
          onHide={this.props.closeUpdateBookModal}
          submit={this.handleUpDateBookSubmit}
          books={this.state.books}
        />

      </>
    )
  }
}


export default BestBooks;
