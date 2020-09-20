import React, { Component } from "react";

export default class BookForm extends Component {
  state = {
    title: this.props.title || "",
    author: this.props.author || "",
    description: this.props.description || "",
  };

  handleFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.onFormSubmit({ ...this.state });
  };

  handleTitleUpdate = (evt) => {
    this.setState({ title: evt.target.value });
  };

  handleAuthorUpdate = (evt) => {
    this.setState({ author: evt.target.value });
  };

  handleDescriptionUpdate = (evt) => {
    this.setState({ description: evt.target.value });
  };

  render() {
    const buttonText = this.props.id ? "Update Book" : "Create Book";
    return (
      <div className="card p-4">
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter a title"
              value={this.state.title}
              className="form-control"
              onChange={this.handleTitleUpdate}
            />
          </div>

          <div className="form-group">
            <label>Author</label>
            <input
              type="text"
              placeholder="Author's name"
              value={this.state.author}
              className="form-control"
              onChange={this.handleAuthorUpdate}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              type="text"
              placeholder="Book Description"
              value={this.state.description}
              rows="5"
              className="form-control"
              onChange={this.handleDescriptionUpdate}
            />
          </div>

          <div className="form-group d-flex justify-content-between">
            <button type="submit" className="btn btn-md btn-primary">
              {buttonText}
            </button>

            <button
              type="button"
              className="btn btn-md btn-secondary"
              onClick={this.props.onCancelClick}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}
