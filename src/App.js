import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Button } from 'react-bootstrap'
import {BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalShown: false};
    
  };
  handleCloseModal = () => {
    this.setState({
      isModalShown: false
    });
  };
  
  handleOpenModal= () => {
    this.setState({
      isModalShown: true
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
                showModal={this.state.isModalShown} 
                closeModal={this.handleCloseModal}/>
              }
            >
            </Route>
            <Route
              path="/about.js"
              element={<About />}
            >
            </Route>
           
          </Routes>
          <Button onClick={(this.handleOpenModal)}>Add Book</Button>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
