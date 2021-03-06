import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons'

const Navigation = () => {
  return (
    <Navbar expand="lg" bg="primary" sticky="top" variant="dark" className="py-1">
      <Container>
        <Navbar.Brand href="/" className="fs-1"><b>muvy</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navmenu" />
        <Navbar.Collapse id="navmenu">
          <Nav className="ms-auto">
            <Nav.Link href="/movies/popular" className="nav-link">Movies</Nav.Link>
            <Nav.Link href="/series/popular" className="nav-link">Series</Nav.Link>
            <Nav.Link href="/people/popular" className="nav-link">People</Nav.Link>
            <Nav.Link href="/account" className="nav-link">Account</Nav.Link>
            <Nav.Link href="/search" className="nav-link"><Search className="fs-4" /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
