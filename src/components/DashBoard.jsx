import React, { Component } from "react";
import ToggleableBookForm from "./book_components/ToggleableBookForm";
import BookList from "./book_components/BookList";

const URL = "http://localhost:8000";

class DashBoard extends Component {
  state = {
    header: {
      "Content-Type": "application/json",
    },
    books: [],
  };

  componentDidMount() {
    fetch(`${URL}/api/books/`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ books: data });
      });
  }

  createNewBook = (book) => {
    fetch(`${URL}/api/books/`, {
      method: "POST",
      headers: this.state.header,
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((book) => {
        this.setState({ books: [...this.state.books, book] });
      });
  };

  updateBook = (newBook) => {
    fetch(`${URL}/api/books/${newBook.id}/`, {
      method: "PUT",
      headers: this.state.header,
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((newBook) => {
        const newBooks = this.state.books.map((book) =>
          book.id === newBook.id ? newBook : book
        );

        this.setState({ books: newBooks });
      });
  };

  deleteBook = (bookId) => {
    fetch(`${URL}/api/books/${bookId}/`, {
      method: "DELETE",
      headers: this.state.header,
    }).then(() => {
      this.setState({
        books: this.state.books.filter((book) => book.id !== bookId),
      });
    });
  };

  render() {
    return (
      <main className="d-flex justify-content-center my-4">
        <div className="col-lg-5 col-md-6 col-sm-12">
          <BookList
            books={this.state.books.slice(0, 10)}
            onDeleteClick={this.deleteBook}
            onUpdateClick={this.updateBook}
          ></BookList>

          <ToggleableBookForm
            onBookCreate={this.createNewBook}
          ></ToggleableBookForm>
        </div>
      </main>
    );
  }
}

export default DashBoard;
