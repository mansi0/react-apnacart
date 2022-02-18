/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import React from "react";

class Navbar extends React.Component  {

  constructor(props) {
    super(props)

    this.state = {
      text : ''
      }
  }

  addToCart() {
    this.setState ({
      text : "Added to Cart"
    })
  }
  
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Apna Cart
          </a>
            <div color="blue"> {this.state.text}</div>
          {//<p class="text-start" bgcolor ="blue">Start aligned text on all viewport sizes.</p>
          }
          <button type="button" className="btn btn-primary btn-lg" onClick = {() => this.addToCart()}>Add To Cart</button>
        </div>
      </nav>
      </>
	    );
  }
}

export default Navbar;

