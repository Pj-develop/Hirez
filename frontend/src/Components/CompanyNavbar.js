import React from "react";
import logoImage from "../Public/logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function CompanyNavbar({ isAuthenticated, email, onLogout }) {
  const navigate = useNavigate();

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
      navigate("/"); // Navigate to the home page ("/") after logout
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
          <Nav.Link href="/vacancies" style={StyleText}>
            <b>Posted Jobs</b>
          </Nav.Link>
          <Nav.Link href="/mic" style={StyleText}>
            <b>Mic</b>
          </Nav.Link>
          <Nav.Link href="/bot" style={StyleText}>
            <b>My Bot</b>
          </Nav.Link>
          <Nav.Link
            href="https://mediafiles.botpress.cloud/a13cd395-f45e-4c22-9df5-3424fe0d11ab/webchat/bot.html"
            style={StyleText}
            target="_blank"
          >
            <b>Chat Bot</b>
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
