import logoImage from "../Public/logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

export default function AppNavbar() {
  const StyleText = {
    fontSize: "20px",
  };
  return (
    <Navbar className="bg-body-tertiary" style={{ padding: "10px" }}>
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src={logoImage}
            style={{ maxHeight: "50px", marginRight: "10px" }}
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home" style={StyleText}>
            <b>Home</b>
          </Nav.Link>
          <Nav.Link href="#Find_Jobs" style={StyleText}>
            <b>Find Jobs</b>
          </Nav.Link>
          <Nav.Link href="#Companies" style={StyleText}>
            <b>Companies</b>
          </Nav.Link>
          <Nav.Link href="#pricing" style={StyleText}>
            <b>Pricing</b>
          </Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Nav className="justify-content-end">
          <Nav.Link href="#login" style={StyleText}>
            <b>Login</b>
          </Nav.Link>
          <Nav.Link href="#register" style={StyleText}>
            <b>Register</b>
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
          {/* <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text> */}
        </Nav>
      </Container>
    </Navbar>
  );
}
