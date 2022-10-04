import React from "react"

// create a class that contains the header and extneds the react.component
// mark it for export so that it can be used in another page
export class Header extends React.Component {
    render() {
        return (
            // div element
            <div>
                {/* output in a h1 */}
                <h1>My Header in another component</h1>
            </div>
        );
    }
}