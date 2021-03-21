import React, { Component } from "react";
import "../Component_Styling/Headings.css";

class Headings extends Component {
  render() {
    return (
      <div className="headings-container">
        <div className="app-name-and-icon">
          <i className="fa fa-magic fa-2x" />
          <h1>Wishlist</h1>
        </div>
        <h1 className="jobs-count">
          {this.props.count === 1
            ? this.props.count + " Job"
            : this.props.count + " Jobs"}
        </h1>
      </div>
    );
  }
}

export default Headings;
