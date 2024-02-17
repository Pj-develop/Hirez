import React from "react";
import logoImage from "../Public/logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

export default function CompanyNavbar({ isAuthenticated, email, onLogout }) {
  const StyleText = {
    fontSize: "20px",
  };

  // Function to extract the part of the email before '@'
  const extractEmailName = (email) => {
    return email.split("@")[0];
  };

  const handleLogout = () => {
    if (typeof onLogout === "function") {
      onLogout();
      window.location.reload();
    }
  };

  return (
    <Navbar className="bg-body-tertiary" style={{ padding: "10px" }}>
      <Container>
        <Navbar.Brand href="/">
          <Image
            src={logoImage}
            style={{ maxHeight: "50px", marginRight: "10px" }}
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" style={StyleText}>
            <b>Home</b>
          </Nav.Link>
          <Nav.Link href="/create/vacancy" style={StyleText}>
            <b>Post Jobs</b>
          </Nav.Link>
          <Nav.Link href="#applicants" style={StyleText}>
            <b>Search Applicants</b>
          </Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Nav className="justify-content-end">
          {isAuthenticated && (
            <>
              <Navbar.Text>Hello, {extractEmailName(email)}</Navbar.Text>
              <Nav.Link onClick={handleLogout} style={StyleText}>
                <b>Logout</b>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
