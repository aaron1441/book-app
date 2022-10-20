import React from "react"

// create a class that contains the content and extneds the react.component
// mark it for export so that it can be used in another page
export class Create extends React.Component {

    
    constructor(){
        super();
        // in js must have a bind for this so that it is associated with the relevent function
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);

        // initialize the state variables to null
        this.state = {
            title:'',
            cover:'',
            author:''
        }
    }

    handleSubmit(e){
        // take an event and (being submitted) handle the information
        e.preventDefault();
        // display the inputs from the form to the console
        console.log(`${this.state.title}`,`${this.state.cover}`,`${this.state.author}`);
        // reset the variable to blank
        this.setState({
            title:'',
            cover:'',
            author:''
        })
    }

    // functions to take the value from each input and assign it to the set state
    onChangeBookTitle(e){
        this.setState({
            title:e.target.value
        })
    }
    onChangeBookCover(e){
        this.setState({
            cover:e.target.value
        })
    }
    onChangeBookAuthor(e){
        this.setState({
            author:e.target.value
        })
    }
    render() {
        return (
            // div element
            <div>
                <h3>Create component</h3>
                {/* puts the informatin to the handleSubmit method */}
                <form onSubmit={this.handleSubmit}>
                    {/* create three inputs for the author, cover and title */}

                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>
                    {/* form input for book cover */}
                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>

                    {/* form input for book author */}
                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>`
                    <input type = "submit" value="Add Book"/>
                </form>
            </div>
        );
    }
}