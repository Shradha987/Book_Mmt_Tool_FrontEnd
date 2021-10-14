import React, { Component, Fragment } from 'react';
import BookList from './BookList';
import ToggleableBookForm from './ToggleableBookForm';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import axios from 'axios';
//import { ToastsContainer, ToastsStore } from 'react-toasts';
//import { IoMdTrash } from "react-icons/io";
//import { MdDoneAll, MdPersonAdd } from "react-icons/md";
//import { TiPencil, TiUpload, TiArrowSync } from "react-icons/ti";
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class BookDashboard extends React.Component {

  state = {

        books: [

            {

                id: 1,

                title: 'Rebecca',

                author: 'Daphne du Maurier',

                description: `While working for Mrs. Van Hopper, in Monte Carlo, a young woman becomes acquainted with Maxim de Winter, a recent widower. After a brief courtship, they become engaged. They marry and then head to his mansion in England, Manderley. She meets Mrs. Danvers, the housekeeper, who was devoted to his first wife, Rebecca, who died in a boating accident. The staff and Maxim's friends also were fond of Rebecca. Mrs. Danvers emphasizes the new Mrs. de Winter's inferiority by comparison. Jack Favell, Rebecca's cousin, comes to visit, saying that Mrs. Danvers invited him. Learning of this infuriates Maxim, who banned Favell from the grounds, and accuses Mrs. de Winter of infidelity, which she denies. She confronts Mrs. Danvers for conspiring against her by inviting Favell, demanding her resignation. Mrs. Danvers insists Favell was lying.`,

                genre: 'History',

                type: 'Novel',

                publication : 'University Press',

                price: 500.00,

                pages: 800


            },

            {

                id: 2,

                title: 'Wings of Fire',

                author: 'Dr.  A. P. J. Abdul Kalam',

                description: `Wings of Fire: An Autobiography of APJ Abdul Kalam, former President of India. It was written by Dr. Abdul Kalam and Arun Tiwari. Dr. Kalam examines his early life, effort, hardship, fortitude, luck and chance that eventually led him to lead Indian space research, nuclear and missile programs. `

            }

      ]

  }

  createNewBook = (book) => {

      book.id = Math.floor(Math.random() * 1000);

      this.setState({books: this.state.books.concat([book])});

  }

  updateBook = (newBook) => {

      const newBooks = this.state.books.map(book => {

          if(book.id === newBook.id) {

                return Object.assign({}, newBook)

          } else {

                return book;

          }

      });

      this.setState({books: newBooks});

  }

  deleteBook = (bookId) => {

      this.setState({books: this.state.books.filter(book => book.id !== bookId)})

  }

  render() {

      return (

          <main className="d-flex justify-content-center my-4">

              <div  className="col-5">

                  <BookList

                      books={this.state.books}

                      onDeleteClick={this.deleteBook}

                      onUpdateClick={this.updateBook}

                  ></BookList>

                  <ToggleableBookForm

                      onBookCreate={this.createNewBook}
               ></ToggleableBookForm>

              </div>

          </main>

      )

  }

}