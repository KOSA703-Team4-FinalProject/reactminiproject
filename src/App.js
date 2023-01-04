import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import "./App.css";
import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Trot from "./components/Trot";
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
              <NavDropdown title="장르" id="basic-nav-dropdown">
                <NavDropdown.Item href="/trot">트로트</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  댄스 
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  발라드
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  힙합
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Suspense fallback={<div>로딩중....</div>}>
        <Routes>
          <Route path="*" element={<h3>없는 페이지 입니다.</h3>} />
          <Route path="/trot" element={<Trot />} />
        </Routes>
      </Suspense>
    </div>
  );
}


export default App;
