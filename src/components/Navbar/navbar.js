import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import icon from "../Navbar/textarea-t.svg";
import Button from 'react-bootstrap/Button';

function NavBar() {
  return (
    <>
      <Navbar expand="lg" bg="secondary" data-bs-theme="secondary">
        <Container>
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={icon}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Text Analyzer
            </Navbar.Brand>
          </Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav defaultActiveKey="/home" as="ul">
              <Nav.Item as="li">
                <Nav.Link href="/home"><Button variant="outline-dark">Home</Button></Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="link-1"><Button variant="outline-dark">About</Button></Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
