import React, { Component, Fragment } from 'react';
import BookList from './BookList';
import BookForm from './BookForm'

export default class ToggleableBookForm extends React.Component {

  state = {

    inCreateMode: false

  }

  handleCreateClick = () => {

    this.setState({inCreateMode: true});

  }

  leaveCreateMode = () => {

    this.setState({inCreateMode: false});

  }

  handleCancleClick = () => {

    this.leaveCreateMode();

  }

  handleFormSubmit = (book) => {

    this.leaveCreateMode();

    this.props.onBookCreate(book);

  }

  render() {

    if (this.state.inCreateMode) {

      return (

        <div className="mb-3 p-4" styles={{boxShadow: "0 0 10px #ccc"}} >

          <BookForm

            onFormSubmit={this.handleFormSubmit}

            onCancelClick={this.handleCancleClick}></BookForm>

        </div>


      )

    }

    return (

      <button onClick={this.handleCreateClick} className="btn btn-secondary">

        <i className="fas fa-plus"></i>

      </button>

    );

  }

}