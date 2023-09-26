import React from "react";
import "../css/Header.css";

export class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <a>Home</a>
          <a>About us</a>
          <a>Events & Classes</a>
          <a>Get Involved</a>

          <a>Contact</a>
        </header>
      </>
    );
  }
}
