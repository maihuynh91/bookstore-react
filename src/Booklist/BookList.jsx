
import React, { Component } from 'react';
import * as axios from 'axios';
import './BookList.css';
import ReactPaginate from 'react-paginate';
import { Book } from '../Book/Book';

const url = 'http://localhost:3004/books';

export class BookList extends Component {
  constructor() {
    super();
    this.state = { 
      listView: true, 
      books: [],
      pagination: {count:10, page: 1, total: null},
      searchItem:''
      };
    this.loadBooks();

  }

  loadBooks(){
   //console.log(`pagination here : ${...this.state.pagination}`)
    let params = `?_page=${this.state.pagination.page}&_limit=${this.state.pagination.count}`;
    if(this.state.searchItem) {params+= `&title_like=${this.state.searchItem}`
      };
    axios.get(url+params).then(response => {
      this.setState({ 
        books: response.data,
        pagination: { 
          ...this.state.pagination, //create new object from this.state.pagination
          total: +response.headers['x-total-count']
        }
      });
    });
  };

  handlePageClick = reactPaginatePage => {
    this.setState({pagination: {...this.state.pagination, page: reactPaginatePage.selected + 1}},
    this.loadBooks )
  };


  listView = () => {
    this.setState({ listView: true });
  };

  getFirst100Words = words => {
    console.log(words);
    let wordTokens = words.split(' ');
    if (wordTokens.length > 50) {
      return wordTokens.slice(0, 50).join(' ') + '...';
    }
    return words;
  };

  handleSearchInput = event => {
    this.setState({ searchItem: event.target.value, pagination:{...this.state.pagination, page:1}}, this.loadBooks);
  }

  gridView = () => {
    this.setState({ listView: false });
  };
  
  render() {
    let renderedBookList = this.state.books.map((book, id) => {
      return (
        <div
          className={`item col-xs-4 col-lg-4 ${
            this.state.listView ? 'list-group-item' : 'grid-group-item'
          }`}
          key={id}
        >
        <Book book={book} handleChoseBookList={this.props.handleChoseBookList}/>
        </div>
      );
    });
    return (
      <div>
        <hr />
        <hr />
        <div className="container">
          <div className="row">
            <h2>Our current bookstore</h2>
          </div>
          <div className="row">
            <div className="col-lg-12 my-3">
              <div className="pull-right">
                <div className="btn-group">
                  <button
                    className="btn btn-info"
                    id="list"
                    onClick={this.listView}
                  >
                    List View
                  </button>
                  <button
                    className="btn btn-danger"
                    id="grid"
                    onClick={this.gridView}
                  >
                    Grid View
                  </button>
                </div>
              </div>
            </div>
          </div>
        <div className='row'>
          <ReactPaginate 
              containerClassName="pagination pagination-lg"
              breakClassName="page-item"
              breakLabel={<span className="page-link">...</span>}
              pageClassName="page-item"
              activeClassName="active"
              activeLinkClassName="disabled"
              previousClassName="page-item"
              nextClassName="page-item"
              pageLinkClassName="page-link"
              previousLinkClassName="page-link"
              nextLinkClassName="page-link"
              pageCount={
                this.state.pagination.total / this.state.pagination.count
              }
              initialPage={this.state.pagination.page - 1}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
              onPageChange={this.handlePageClick}
            />
          </div>
          <div>
            <input 
              type="text"
              value={this.state.searchItem}
              placeholder="Enter text"
              onChange={this.handleSearchInput}
            />

          </div>
          <div id="products" className="row view-group">
            {renderedBookList}
          </div>
        </div>
      </div>
    );
  }
}
