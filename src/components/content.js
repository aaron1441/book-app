import React from "react"

// create a class that contains the content and extneds the react.component
// mark it for export so that it can be used in another page
export class Content extends React.Component {
    render() {
        return (
            // div element
            <div>
                {/* h1 tag to say hello world */}
                <h1>Hello World</h1>
                {/* output the date in a h2 tag */}
                <h2>It is {new Date().toLocaleDateString()}.</h2>
            </div>
        );
    }
}


