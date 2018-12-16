import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from './Home/Home';
import { About } from './About/About';
import { BookList } from './Booklist/BookList'
import { YourCartPage } from './CartActions/YourCartPage'

class App extends Component {
  constructor() {
    super();
    this.state = {
      choseBookList: []
    }
  }

  handleChoseBookList = (book) => {
    this.setState({ choseBookList: [...this.state.choseBookList, book] })
  }


  render() {
    return (
      <div className="App">

        <script
          src="http://code.jquery.com/jquery-3.3.1.min.js"
          integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
          crossOrigin="anonymous">
        </script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
              <div className="container">
                <a className="navbar-brand" href="/">Bookstore</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarResponsive"
                  aria-controls="navbarResponsive"
                  aria-expanded="false"
                  aria-label="Toggle navigation">

                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/"> Home </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/books">Books</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/yourcart">Your Cart</Link>
                    </li>
                  </ul>
                </div>

              </div>
            </nav>

            <hr />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/books' render={(props) => { return <BookList {...props} handleChoseBookList={(book) => this.handleChoseBookList(book)} /> }} />
            <Route path='/yourcart' render={(props) => { return <YourCartPage {...props} choseBookList={this.state.choseBookList} /> }} />
          </div>

        </Router>


      </div>
    );
  }
}

export default App;
