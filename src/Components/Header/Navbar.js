import React, { useState } from 'react';
import { Link ,NavLink } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown, Button, Offcanvas } from "react-bootstrap";
import logo from "../../Assests/Images/logo.webp";
import '../../Components/Header/Navbar.css'

const NavbarComponent = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

//   const handleClose = () => setShowOffcanvas(false);
//   const handleShow = () => setShowOffcanvas(true);

  function handleClose(){
    setShowOffcanvas(false)
  }

  function handleShow(){
    setShowOffcanvas(true)
  }

  return (
    <>
      <Navbar style={{background: "#0B0C49"}} variant="dark" expand="lg" className="py-3 navbar_parent">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              className="site_logo"
              src={logo} // Replace with your logo path
              alt="Logo"
              style={{ width: '130px', marginRight: '10px' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto my-2 my-lg-0 nabar_inner">
              <Nav.Link as={Link} to="/" className="text-white navbar_link">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white navbar_link">
                About Us
              </Nav.Link>
              <NavDropdown
                title="Services"
                id="basic-nav-dropdown"
                className="text-white navbar_link"
                onMouseEnter={(e) => e.target.click()}
                onMouseLeave={(e) => e.target.click()}
              >
                <div className="d-lg-flex mega-menu p-4 bg-light mega_menu_main">
                  <div className="col-lg-4">
                    <h6>Category 1</h6>
                    <NavDropdown.Item as={Link} to="/services/service1" className='navbar_dropdown'>
                      Service 1
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/services/service2" className='navbar_dropdown'>
                      Service 2
                    </NavDropdown.Item>
                  </div>
                  <div className="col-lg-4">
                    <h6>Category 2</h6>
                    <NavDropdown.Item as={Link} to="/services/service3" className='navbar_dropdown'>
                      Service 3
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/services/service4" className='navbar_dropdown'>
                      Service 4
                    </NavDropdown.Item>
                  </div>
                  <div className="col-lg-4">
                    <h6>Category 3</h6>
                    <NavDropdown.Item as={Link} to="/services/service5" className='navbar_dropdown'>
                      Service 5
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/services/service6" className='navbar_dropdown'>
                      Service 6
                    </NavDropdown.Item>
                  </div>
                </div>
              </NavDropdown>
              <Nav.Link as={Link} to="/pricing" className="text-white navbar_link">
                Pricing
              </Nav.Link>
              <Nav.Link as={Link} to="/portfolio" className="text-white navbar_link">
                Portfolio
              </Nav.Link>
            </Nav>

            {/* Contact Us button, aligned to the right */}
            <Nav className="ml-lg-auto">
              <Nav.Item>
                <NavLink to="/contact-us" className="mt-3 mt-lg-0 navbar_btn">
                    Contact Us
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas for mobile/tablet */}
      <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" onClick={handleClose}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleClose}>About Us</Nav.Link>
            <NavDropdown
              title="Services"
              id="basic-nav-dropdown"
              className="text-white navbar_link"
            >
              <div className="d-lg-flex mega-menu p-4 bg-dark text-white">
                <div className="col-lg-4">
                  <h6>Category 1</h6>
                  <NavDropdown.Item as={Link} to="/services/service1" onClick={handleClose}>
                    Service 1
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/services/service2" onClick={handleClose}>
                    Service 2
                  </NavDropdown.Item>
                </div>
                <div className="col-lg-4">
                  <h6>Category 2</h6>
                  <NavDropdown.Item as={Link} to="/services/service3" onClick={handleClose}>
                    Service 3
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/services/service4" onClick={handleClose}>
                    Service 4
                  </NavDropdown.Item>
                </div>
                <div className="col-lg-4">
                  <h6>Category 3</h6>
                  <NavDropdown.Item as={Link} to="/services/service5" onClick={handleClose}>
                    Service 5
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/services/service6" onClick={handleClose}>
                    Service 6
                  </NavDropdown.Item>
                </div>
              </div>
            </NavDropdown>
            <Nav.Link as={Link} to="/pricing" onClick={handleClose}>Pricing</Nav.Link>
            <Nav.Link as={Link} to="/portfolio" onClick={handleClose}>Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/contact-us" onClick={handleClose}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavbarComponent;
