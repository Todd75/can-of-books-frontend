import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


let axios = require('axios')
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

  componentDidMount = async () => {
    this.getBooks();
  }


  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        {this.state.books.length > 0 ? (
          <Carousel variant="dark">
            {this.state.books.map((oneBook) => (
              <Carousel.Item>
                
                  <img
                    src="https://media.istockphoto.com/photos/row-of-books-on-a-shelf-multicolored-book-spines-stack-in-the-picture-id1222550815?b=1&k=20&m=1222550815&s=170667a&w=0&h=MTxBeBrrrYtdlpzhMpD1edwLYQf3OPgkNeDEgIzYJww="
                    alt="book placeholder"
                  />
                  <Carousel.Caption>
                    <p id="bookNameID">{this.state.books.name}</p>
                  </Carousel.Caption>
                  
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found</h3>
        )}
        
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