import React, {Component} from 'react';

export class Book extends Component{
    render(){
        return (
            <div className="thumbnail card">
            <div className="img-event">
              <img
                className="group list-group-image img-fluid"
                src={this.props.book.image_url}
                alt=""
              />
            </div>
            <div className="caption card-body title">
              <h4 className="group card-title inner list-group-item-heading">
                {this.props.book.title}
              </h4>
              <p className="group inner list-group-item-text">
                Author:
                <span>
                  {this.props.book.authors.join(', ')}
                </span>
              </p>
            </div>
            <div className="caption card-body title">
              <p className="group inner list-group-item-text">
                {this.props.book.description}
              </p>
            </div>
            <div>
              <div className="caption card-body body">
                <div className="col-xs-6 col-md-4">
                  <p className="btn btn-success" onClick = {() => this.props.handleChoseBookList(this.props.book)}>
                    Buy Book
                  </p>
                  <a className="btn btn-success" href="/yourcart">
                    {this.props.book.price}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
    }
}