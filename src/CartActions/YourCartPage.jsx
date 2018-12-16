import React, { Component } from 'react';
import {Book} from '../Book/Book';
export class YourCartPage extends Component {
    constructor() {
        super();
    }

    render() {
        let renderedBookList = this.props.choseBookList.map((book, id) => {
            return (
                <div
                    className={`item col-xs-4 col-lg-4`}
                    key={id}
                >
                    <Book book={book} />
                </div>
            );
        });
        return (
            <div>
                {renderedBookList}
            </div>
        )
    }
}