import React, { Component, Fragment } from 'react';
export default class Book extends React.Component {

  render() {

    return (
    <>
      <div className="card" styles="width: 18rem;" ></div>

        <div className="card-header d-flex justify-content-between">

          <span>

            <strong>Title: </strong>{this.props.title}

          </span>

          <div>

            <span onClick={this.props.onEditClick} className="mr-2"><i className="far fa-edit"></i></span>

            <span onClick={this.props.onDeleteClick}><i className="fas fa-trash"></i></span>

          </div>

        </div>

        <div className="card-body">

          {this.props.description}

        </div>

        <div className="card-footer">

          <strong>Author:</strong>  {this.props.author}

        </div>
</>



    );

  }

}

