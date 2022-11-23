import React from 'react';
import { Carousel, Button} from 'react-bootstrap';
import BookFormModal from './BookFormModal.js';
import UpdateBookForm from './UpdateBookForm.js';
let axios = require('axios');
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  getBooks = async () => {
    let url = `${process.env.REACT_APP_SERVER_URL}/books`;
    try {
      let result = await axios.get(url);

      this.setState({ books: result.data });
      this.setState({ error: false });
      console.log(result);

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
      title: e.target.title.value || this.props.books.title,
      description: e.target.description.value || this.props.books.title,
      status: e.target.status.value || this.props.books.status,
      _id: this.props.books._id,
      __v: this.props.books.__v
    };
    // send bookToUpdate to the server
  };

  updatedBooks = async (bookToUpdate) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${bookToUpdate._id}`;
      let updatedBookObj = await axios.put(url, bookToUpdate);

      let updatedBookArr = this.state.books.map(book => {
        return book._id === bookToUpdate._id 
          ? updatedBookObj.data
          : book;
      });
      this.setState({
        books: updatedBookArr
      });
    } catch(error) {
      console.log('Error: ', error.response.data);
    }
  }

  render() {

    return (
      <>
        {this.state.books.length > 0 ? (

          <Carousel variant="dark">
            {this.state.books.map((oneBook, idx) => (
              <Carousel.Item key={idx}>
                <img
                  src="https://media.istockphoto.com/photos/row-of-books-on-a-shelf-multicolored-book-spines-stack-in-the-picture-id1222550815?b=1&k=20&m=1222550815&s=170667a&w=0&h=MTxBeBrrrYtdlpzhMpD1edwLYQf3OPgkNeDEgIzYJww="
                  alt="book placeholder"
                />
                <Carousel.Caption>
                  <p id="bookNameID">{oneBook.title}</p>
                  <p>{oneBook.description}</p>
                  <p>{oneBook.status}</p>
                  <Button onClick={() => this.deleteBook(oneBook._id)}>
                    Remove Book
                  </Button>
                  
                  <Button onClick={() => this.updatedBooks(oneBook._id)}>
                    Update Book
                  </Button>
                </Carousel.Caption>
                
              </Carousel.Item>
            ))}
          </Carousel>

        ) : (
          <h3>No Books Found</h3>
        )}
        <BookFormModal 
          show={this.props.showModal}
          onHide={this.props.closeModal}
          submit={this.handleBookSubmit}
        />

        <UpdateBookForm 
          show={this.props.showModal}
          onHide={this.props.closeModal}
          submit={this.handleUpDateBookSubmit}
        />

      </>
    )
  }
}


export default BestBooks;


/* <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

{this.state.books.length ? (
  <p>Book Carousel coming soon</p>
) : (
  <h3>No Books Found :(</h3>
)} */
