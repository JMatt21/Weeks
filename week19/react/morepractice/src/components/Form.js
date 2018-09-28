import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  handleTypeOnChangeEvent = event => {
    console.log(event.bubbles);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  formSubmit = event => {
    event.preventDefault();
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    this.setState({
      username: '',
      password: ''
    });
  }

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          type="text"
          placeholder="Username"
          onChange={this.handleTypeOnChangeEvent}
          value={this.state.username}
          name='username'
        />
        <input
          type="password"
          placeholder="Password"
          onChange={this.handleTypeOnChangeEvent}
          value={this.state.password}
          name='password'
        />
        <button onClick={this.formSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;
