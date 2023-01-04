import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import "./App.css";
import React from "react";
import { Link } from "react-router-dom";
export let Stockcontext = React.createContext(); //1.컨텍스트 만들고

function App() {

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">노래 정보 공유</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Detail</Nav.Link>
              <Nav.Link href="/">Cart</Nav.Link>
              <Link to="/">이벤트</Link>
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="/">about</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  찾아오는 길
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}


export default App;
