import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";

class Books extends Component {
  // Initialize this.state.books as an empty array
  state = {
    books: [],
    title: '',
    author: '',
    synopsis: ''
  };

  // Add code here to get all books from the database and save them to this.state.books

  componentDidMount(){
    this.getMongoBooks();
  }
  getMongoBooks = () => {
    API.getBooks()
    .then(res => this.setState({books: res.data}))
    .catch(err => console.log(err));
  }

  handlesInputChanges = event => {
    const { name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handlesFormSubmission = event => {
    event.preventDefault();
    const {title, author, synopsis} = this.state;
    API.saveBook({
      title: title,
      author: author,
      synopsis: synopsis
    })
    .then(() => this.getMongoBooks())
    .catch(err => console.log(err));
  }
  handlesDeletions = id => {
    API.deleteBook(id)
      .then(() => this.getMongoBooks())
      .catch( err => console.log(err));
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input name="title" onChange={this.handlesInputChanges} placeholder="Title (required)" />
              <Input name="author" onChange={this.handlesInputChanges} placeholder="Author (required)" />
              <TextArea name="synopsis" onChange={this.handlesInputChanges} placeholder="Synopsis (Optional)" />
              <FormBtn onClick={this.handlesFormSubmission}>Submit Book</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => this.handlesDeletions(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
