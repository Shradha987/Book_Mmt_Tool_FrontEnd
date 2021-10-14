import React, { Component, Fragment } from 'react';

import ToggleableBookForm from './ToggleableBookForm';
import EditableBook from './EditableBook';


export default class BookList extends React.Component {

  render() {

    const books = this.props.books.map(book => (

      <EditableBook

        key={book.id}

        id={book.id}

        title={book.title}

        author={book.author}

        description={book.description}

        onDeleteClick={this.props.onDeleteClick}

        onUpdateClick={this.props.onUpdateClick}

      ></EditableBook>

    ));

    return (

      <div>

        {books}

      </div>

    );

  }

}


