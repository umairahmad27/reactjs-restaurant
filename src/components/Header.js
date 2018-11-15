import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="row deep-purple darken-2 white-text header marginZero">
          <div className="container">
            <div className="col s12">
              <h4 className="center-align marginZero">Welcome To Our Restaurant</h4>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;