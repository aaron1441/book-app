import React from "react"
import { Books } from "./books";
import axios from "axios";

// create a class that contains the content and extneds the react.component
// mark it for export so that it can be used in another page
export class Read extends React.Component {

    componentDidMount() {
        // fires when component becomes visible
        // access the the http client
        // makes a http request
        // set the get to take information from the server
        axios.get('http://localhost:4000/api/books')
        // arrow function
        // takes the response from the request in this callback function 
        // assigns the data to the books
        .then((response)=>{
            this.setState({
                books: response.data.books
            })
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    // the state variable belongs to the book componenet and allows the array of books to be stored and 
    // accessed from the book component
    state = {
        // books array is filled with json data from the lab document
        books: []
    }
    // this is standard for a component
    render() {
        return (
            // div element
            <div>
                <h3>Read Component</h3>
                {/* this embeds the book component onto the page */}
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}