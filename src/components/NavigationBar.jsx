import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function NavigationBar() {  // Track the mobile menu and use the URL to highlight the current page.
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <Navbar bg="primary" data-bs-theme="dark" expand="sm" collapseOnSelect
      expanded={menuOpen} onToggle={setMenuOpen}>
      <Container>
        <Navbar.Brand as={Link} to="/">Lab 4</Navbar.Brand>
        {/* Expose the menu state to assistive technology. */}
        <Navbar.Toggle aria-controls="main-navigation" aria-expanded={menuOpen} />
        <Navbar.Collapse id="main-navigation">
          <Nav className="me-auto" activeKey={pathname}>
            {/* NavLink avoids a full reload; end matches Home only at /. */}
            <Nav.Link as={NavLink} to="/" end eventKey="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/read" eventKey="/read">Read</Nav.Link>
            <Nav.Link as={NavLink} to="/create" eventKey="/create">Create</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
import { useState } from 'react'
