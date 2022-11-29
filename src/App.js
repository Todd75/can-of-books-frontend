import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import { Button } from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton.js'
import Profile from './Profile.js'
import LogoutButton from './LogoutButton.js'
import Content from './Content.js'
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
      <>
        <Router>
          <Header id="header" />
          { this.props.auth0.isAuthenticated ? <LogoutButton/> : <LoginButton/> }
          { this.props.auth0.isAuthenticated ? <Content/> : <h2>Please Log In</h2> }
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
              element={<About 
                showAddBookModal={this.state.isAddBookModalShown}
                closeAddBookModal={this.handleCloseAddBookModal}
                showUpdateBookModal={this.state.isUpdateBookModalShown}
                closeUpdateBookModal={this.handleCloseUpdateBookModal}
                openUpdateBookModal={this.handleOpenUpdateBookModal}
              />}
            >
            </Route>

          </Routes>
          <div id="addBookBtnDiv">
            <button onClick={(this.handleOpenAddBookModal)} className="custom-btn btn-12" ><span>Click Here!</span><span>Add Your Book</span></button>
          </div>

          <Footer />
        </Router>
        </>
      </>
    )
  }
}

export default withAuth0(App);
