import React, { Component, Fragment } from 'react';
export default class BookForm extends React.Component {

  state = {

    title: this.props.title || '',

    author: this.props.author || '',

    description: this.props.description || '',

    type: this.props.type || '',

    genre: this.props.genre || '',

    publication: this.props.publication || '',

    price: this.props.price || '',

    pages: this.props.pages || '',

    photo: this.props.photo || '',


  }

  handleFormSubmit = (evt) => {

    evt.preventDefault();

    this.props.onFormSubmit({...this.state});

  }

  handleTitleUpdate = (evt) => {

    this.setState({title: evt.target.value});

  }

  handleAuthorUpdate = (evt) => {

    this.setState({author: evt.target.value});

  }

  handleDescriptionUpdate = (evt) => {

    this.setState({description: evt.target.value});

  }

  render() {

    const buttonText = this.props.id ? 'Update Book': 'Create Book';

    return (

      <form onSubmit={this.handleFormSubmit}>

        <div className="form-group">

          <label>

            Title

          </label>

          <input type="text" placeholder="Enter a title"

            value={this.state.title} onChange={this.handleTitleUpdate}

            className="form-control"

          />

        </div>


        <div className="form-group">

          <label>

            Author

          </label>

          <input type="text" placeholder="Author's name"

            value={this.state.author} onChange={this.handleAuthorUpdate}

            className="form-control"

          />

        </div>

           <div className="form-group">

          <label>

            Type

          </label>

          <input type="text" placeholder="Type of Book"

            value={this.state.type} onChange={this.handleAuthorUpdate}

            className="form-control"

          />

        </div>

        <div className="form-group">

          <label>

            Genre

          </label>

          <input type="text" placeholder="Genre of Book"

            value={this.state.genre} onChange={this.handleAuthorUpdate}

            className="form-control"

          />

        </div>

        <div className="form-group">

          <label>

            Pages

          </label>

          <input type="text" placeholder="Number of Pages"

            value={this.state.pages} onChange={this.handleAuthorUpdate}

            className="form-control"

          />

        </div>


        <div className="form-group">

          <label>

            Publication

          </label>

          <input type="text" placeholder="Publication"

            value={this.state.publication} onChange={this.handleAuthorUpdate}

            className="form-control"

          />

        </div>


        <div className="form-group">

          <label>

            Price

          </label>

          <input type="text" placeholder="Price of Book"

            value={this.state.price} onChange={this.handleAuthorUpdate}

            className="form-control"

          />

        </div>

        <div className="form-group">

          <label>

            Photo

          </label>

          <input type="text" placeholder="Book Photo"

            value={this.state.photo} onChange={this.handleAuthorUpdate}

            className="form-control"

          />

        </div>
        <div className="form-group">

          <label>

            Description

          </label>

          <textarea className="form-control" placeholder="Book Description"

            rows="5" value={this.state.description}

            onChange={this.handleDescriptionUpdate}

          >

            {this.state.description}

          </textarea>

        </div>

        <div className="form-group d-flex justify-content-between">

          <button type="submit" className="btn btn-md btn-primary">

            {buttonText}

          </button>

          <button type="button" className="btn btn-md btn-secondary" onClick={this.props.onCancelClick}>

            Cancel

          </button>

        </div>

      </form>

    )

  }

}