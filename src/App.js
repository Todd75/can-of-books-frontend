import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import { Button } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddBookModalShown: false,
      isUpdateBookModalShown: false
    };

  };

  handleCloseAddBookModal = () => {
    this.setState({
      isAddBookModalShown: false
    });
  };

  handleOpenAddBookModal = () => {
    this.setState({
      isAddBookModalShown: true
    });
  };

  handleCloseUpdateBookModal = () => {
    this.setState({
      isUpdateBookModalShown: false
    });
  };

  handleOpenUpdateBookModal = () => {
    this.setState({
      isUpdateBookModalShown: true
    });
  };

  render() {
    return (
      <>
        <Router>
          <Header id="header" />

          <Routes>
            <Route
              exact path="/"
              element={<BestBooks
                showAddBookModal={this.state.isAddBookModalShown}
                closeAddBookModal={this.handleCloseAddBookModal}
                showUpdateBookModal={this.state.isUpdateBookModalShown}
                closeUpdateBookModal={this.handleCloseUpdateBookModal}
                openUpdateBookModal={this.handleOpenUpdateBookModal} />
              }
            >

            </Route>
            <Route
              path="/about.js"
              element={<About />}
            >
            </Route>

          </Routes>
          <div id="addBookBtnDiv">
            <button onClick={(this.handleOpenAddBookModal)} className="custom-btn btn-12" ><span>Click Here!</span><span>Add Your Book</span></button>
          </div>

          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
