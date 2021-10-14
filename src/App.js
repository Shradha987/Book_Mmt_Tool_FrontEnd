import logo from './logo.svg';
import './App.css';
import BookDashboard from './component/BookDashboard';
import Book from './component/Book';
import BookList from './component/BookList';
import ToggleableBookForm from './component/ToggleableBookForm';
import EditableBook from './component/EditableBook';
import BookForm from './component/BookForm';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
     <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">BookDashboard</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/booklist'} className="nav-link">BookList</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/edit'} className="nav-link">Update</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br></br>
          <Switch>
            <Route exact path='/' component={BookDashboard} />
            <Route exact path='/booklist' component={BookList} />
            <Route exact path='/edit' component={EditableBook} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
