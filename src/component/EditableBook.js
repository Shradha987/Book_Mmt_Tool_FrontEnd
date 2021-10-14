import React, { Component, Fragment } from 'react';

import BookForm from './BookForm'
import Book from './Book'
export default class EditableBook extends React.Component {

  state = {

    inEditMode: false

  };

  enterEditMode = () => {

    this.setState({inEditMode: true});

  }

  leaveEditMode = () => {

    this.setState({inEditMode: false});

  }

  handleDelete = () => {

    this.props.onDeleteClick(this.props.id);

  }

  handleUpdate = (book) => {

    this.leaveEditMode()

    book.id = this.props.id;

    this.props.onUpdateClick(book);

  }

  render() {

    const component = () => {

      if(this.state.inEditMode) {

        return (

          <BookForm

            id={this.props.id}

            title={this.props.title}

            author={this.props.author}

            description={this.props.description}

            type={this.props.type}

            genre={ this.props.genre}

            publication={this.props.publication}

            price={ this.props.price}

            pages={ this.props.pages}

            photo={this.props.photo}

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

      )

    }

    return (

      <div className="mb-3 p-4" style={{boxShadow: '0 0 10px #ccc'}} >

        {component()}

      </div>

    )

  }

}