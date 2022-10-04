import React from "react"

// create a class that contains the footer and extneds the react.component
// mark it for export so that it can be used in another page
export class Footer extends React.Component {
    render() {
        return (
            // div element
            <div>
                {/* h1 element about the footer */}
                <h1>My Footer in another component</h1>
            </div>
        );
    }
}