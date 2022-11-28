import './About.css'
import { Component } from "react";
import BookFormModal from './BookFormModal.js'
import BestBooks from './BestBooks.js'

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>
        <div id="container">
          <div className="content">
            <h2>The Creators of This Website:</h2>
            <h2>The Creators of This Website:</h2>
          </div>
        </div>
        <span id="aboutCards">
          <div className="card1">
            <div className="card1-inner">
              <h2 id="h1P">Todd Wolden</h2>
              <img
                src="https://avatars.githubusercontent.com/u/112423639?v=4"
                alt="Creator PFP"
                width="200px"
              />
            </div>
          </div>
          <div className="card2">
            <div className="card2-inner">
              <h2 id="h1P">Harper Foley</h2>
              <img
                src="https://avatars.githubusercontent.com/u/109574453?v=4"
                alt="Creator PFP"
                width="200px"
              />
            </div>
          </div>
        </span>
        <BookFormModal
          show={this.props.showAddBookModal}
          onHide={this.props.closeAddBookModal}
          submit={this.props.handleBookSubmit}
        />
      </>
    )

  }
};

export default Profile;
