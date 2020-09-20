import React, { Component } from "react";
import BookForm from "./BookForm";

class ToggleableBookForm extends Component {
  state = {
    inCreateMode: false,
  };

  handleCreateClick = () => {
    this.setState({ inCreateMode: true });
  };

  leaveCreateModel = () => {
    this.setState({ inCreateMode: false });
  };

  handleCreateModel = () => {
    this.setState({ inCreateMode: false });
  };

  handleCancelClick = () => {
    this.leaveCreateModel();
  };

  handleFormSubmit = (book) => {
    this.leaveCreateModel();
    this.props.onBookCreate(book);
  };

  render() {
    if (this.state.inCreateMode) {
      return (
        <div className="mb-3">
          <BookForm
            onFormSubmit={this.handleFormSubmit}
            onCancelClick={this.handleCancelClick}
          />
        </div>
      );
    }

    return (
      <button onClick={this.handleCreateClick} className="btn btn-secondary">
        <i className="fas fa-plus"></i>
      </button>
    );
  }
}

export default ToggleableBookForm;
