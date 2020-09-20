import React from "react";

export default class Book extends React.Component {
  state = {
    isExpanded: false,
  };

  handleAccordion = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  render() {
    const {
      title,
      author,
      description,
      onDeleteClick,
      onEditClick,
    } = this.props;

    const getHeaderClasses = () => {
      let headerClasses = "card-header d-flex justify-content-between";
      if (description.length < 500) return headerClasses;

      headerClasses += " card-accordion-header";
      this.state.isExpanded && (headerClasses += " expanded");
      return headerClasses;
    };

    return (
      <div className="card">
        <div className={getHeaderClasses()} onClick={this.handleAccordion}>
          <span>
            <strong>Title: </strong>
            {title}
            {!this.state.isExpanded && (
              <i className="fas fa-arrow-down fa-sm ml-3 expand-icon"></i>
            )}
          </span>

          <div className="card-actions">
            <span onClick={onEditClick} className="mr-3">
              <i className="far fa-edit"></i>
            </span>

            <span onClick={onDeleteClick}>
              <i className="fas fa-trash"></i>
            </span>
          </div>
        </div>

        <div className="card-body">{description}</div>

        <div className="card-footer">
          <strong>Author: </strong> {author}
        </div>
      </div>
    );
  }
}
