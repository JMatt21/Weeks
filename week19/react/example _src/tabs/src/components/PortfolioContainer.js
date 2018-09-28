import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderSwitch = (page) => {
    switch (page) {
      case 'Home': return <Home />
      case 'About': return <About />
      case 'Contact': return <Contact />
      case 'Blog': return <Blog />
      default: return <h2>Unknown Page</h2>
    }
  }
  render() {
    const pages = ["Home", "About", "Contact", "Blog", "test", "loooook at me c:"];
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
          pages={keyifier(pages)}
        />
        {this.renderSwitch(this.state.currentPage)}
      </div>
    );
  }
}

// Helper Function(s)
const keyifier = array => {
  // array.prototype.map does not have an included index
  // so we have to make our own
  let index = 0;
  return array.map(i => (
    { key: index++, name: i}
  ));
};

export default PortfolioContainer;
