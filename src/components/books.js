import React from "react";
import { BookItems } from "./bookItems";
// import the react component and the book component
// declare the class and mark it for export
export class Books extends React.Component {
    render(){
        // this returns the array of books
        // the map function allows the same function to be called on each element of the array
        // the book.isbn gives each element a unique key which gets rid of a caution message
        return this.props.books.map(
            (book)=>{
                return <BookItems book={book} key={book.isbn}></BookItems>
            }
        );
    }
}   