import React from "react"
import { Books } from "./books";

// create a class that contains the content and extneds the react.component
// mark it for export so that it can be used in another page
export class Read extends React.Component {
    // the state variable belongs to the book componenet and allows the array of books to be stored and 
    // accessed from the book component
    state = {
        // books array is filled with json data from the lab document
        books: [
            {
                "title": "Learn Git in a Month of Lunches",
                "isbn": "1617292419",
                "pageCount": 0,
                "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
                "status": "MEAP",
                "authors": ["Rick Umali"],
                "categories": []
            },
            {
                "title": "MongoDB in Action, Second Edition",
                "isbn": "1617291609",
                "pageCount": 0,
                "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
                "status": "MEAP",
                "authors": [
                    "Kyle Banker",
                    "Peter Bakkum",
                    "Tim Hawkins",
                    "Shaun Verch",
                    "Douglas Garrett"
                ],
                "categories": []
            },
            {
                "title": "Getting MEAN with Mongo, Express, Angular, and Node",
                "isbn": "1617292036",
                "pageCount": 0,
                "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
                "status": "MEAP",
                "authors": ["Simon Holmes"],
                "categories": []
            }
        ]
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