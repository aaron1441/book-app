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
            <Card style={{width:'18rem'}}>
                <Button variant="light">{this.props.book.title}</Button>
                <Card.Img variant="top" src={this.props.book.thumbnailUrl} />
                <Card.Body>
                    <Card.Text>{this.props.book.authors}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}