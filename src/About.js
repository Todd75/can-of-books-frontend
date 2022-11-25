import './About.css'
import { Component } from "react";

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>
        <span id="aboutCards">
          <div class="card1">
            <div class="card1-inner">
              <h2 id="h1P">Todd Wolden</h2>
              <img
                src="https://avatars.githubusercontent.com/u/112423639?v=4"
                alt="Creator PFP"
                width="200px"
              />
            </div>
          </div>
          <div class="card2">
            <div class="card2-inner">
              <h2 id="h1P">Harper Foley</h2>
              <img
                src="https://avatars.githubusercontent.com/u/109574453?v=4"
                alt="Creator PFP"
                width="200px"
              />
            </div>
          </div>
        </span>
      </>
    )

  }
};

export default Profile;
/* <h1 id="creatorPTag">The Creators of this App</h1>
        <img
          src="https://canvas.instructure.com/images/thumbnails/192514569/aOgSuk7awEL0LkrYDJnP93jKMGExe1TSHNVEMfak"
          alt="Creator PFP placeholder"
        /> */