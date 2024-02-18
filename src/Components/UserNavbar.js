import React from "react";
import logoImage from "../Public/logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function AppNavbar({ isAuthenticated, email, onLogout }) {
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
      navigate("/");
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
          <Nav.Link href="/find" style={StyleText}>
            <b>Find Jobs</b>
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
          {!isAuthenticated && (
            <>
              <Nav.Link href="/login" style={StyleText}>
                <b>Login</b>
              </Nav.Link>
              <Nav.Link href="/user/signup" style={StyleText}>
                <b>New User</b>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                  style={{ marginLeft: 1, paddingBottom: 2 }}
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              </Nav.Link>
              <Nav.Link href="/company/signup" style={StyleText}>
                <b>New Company</b>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                  style={{ marginLeft: 1, paddingBottom: 2 }}
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              </Nav.Link>
            </>
          )}
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
