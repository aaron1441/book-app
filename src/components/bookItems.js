import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// imported components used
// declare the class and mark it for export
export class BookItems extends React.Component {
    render() {
        return (
            // a card is used to improve the styling of each book
            // use this.props.book.x with x being the attribute from the array in the json file
            // there are a few simple card tags used to improve the style
            // update the metadata to suit the new json format from the server
            <Card style={{width:'18rem'}}>
                <Button variant="light">{this.props.book.title}</Button>
                <Card.Img variant="top" src={this.props.book.cover} />
                <Card.Body>
                    <Card.Text>{this.props.book.author}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}