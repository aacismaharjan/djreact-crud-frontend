import React, { Component } from "react";
import BookForm from "./BookForm";
import Book from "./Book";

export default class EditableBook extends Component {
  state = {
    inEditMode: false,
  };

  enterEditMode = () => {
    this.setState({ inEditMode: true });
  };

  leaveEditMode = () => {
    this.setState({ inEditMode: false });
  };

  handleDelete = () => {
    const { title, id } = this.props;
    window.confirm(`Do you want to delete "${title}"?`) &&
      this.props.onDeleteClick(id);
  };

  handleUpdate = (book) => {
    this.leaveEditMode();
    book.id = this.props.id;
    this.props.onUpdateClick(book);
  };

  render() {
    const component = () => {
      if (this.state.inEditMode) {
        return (
          <BookForm
            id={this.props.id}
            title={this.props.title}
            author={this.props.author}
            description={this.props.description}
            onCancelClick={this.leaveEditMode}
            onFormSubmit={this.handleUpdate}
          />
        );
      }

      return (
        <Book
          title={this.props.title}
          author={this.props.author}
          description={this.props.description}
          onEditClick={this.enterEditMode}
          onDeleteClick={this.handleDelete}
        />
      );
    };

    return <div className="mb-4">{component()}</div>;
  }
}
