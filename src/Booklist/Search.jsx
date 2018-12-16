import React, { Component } from 'react';
import * as axios from 'axios';
const url = 'http://localhost:3004/books';

export class Search extends Component{
    constructor(){
        this.state = {
            query: " ",
            result=[]
        }
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    };

    getInfo = () => {
    
        axios.get(url)
    }

    render(){
        return(
            <form>
                <input 
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                    />
                <p>{this.state.query}</p>
            </form>
        )
    }
}