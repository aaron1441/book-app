import './App.css';
// import react from react.js
import React from 'react';
// import the component pages
import { Content } from './components/content';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Read } from './components/read';
import { Create } from './components/create';
// import the components needed for the nav bar from bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import the components for routing from react-router-dom
// it allows us to do client side routing by changing the url
// this allows us to load in a different component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


// npm start gets node to run a web page for us
// using javascript annd jsx to write the web page


// create a class that extends the react.component which allows us to write a component which
// has a class
class App extends React.Component {
  // render method
  render() {
    // return method
    return (
      // include router
      <Router>
        {/* // div which contains all the main elements */}
        <div className="App">
          {/* Navigation bar with three buttons */}
          {/* changes the url of the application */}
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/">NavBar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          {/* Add in the routes to each component */}
          <Routes>
            {/* when the url changes it shows a different component*/}
            <Route path='/' element={<Content />}></Route>
            <Route path='/read' element={<Read />}></Route>
            <Route path='/create' element={<Create />}></Route>
          </Routes>
        </div>
      </Router>
    );

  }

}

export default App;
