import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSignInAlt, FaUserPlus } from "react-icons/fa"; // Import icon

function Header() {
  return (
    <Navbar style={{ backgroundColor: "#000" }} expand="lg">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="header-logo">
          <img
            src="../img/Logo/lg111.jpg"
            alt="Logo"
            className="navbar-brand img-fluid"
            style={{
              maxWidth: "250px",
              height: "70px",
              paddingLeft: "80px",
              paddingTop: "10px",
              marginLeft: "15px",
            }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navbar Links */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-item-custom">Trang Chủ</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-item-custom">Liên Hệ</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-item-custom">Về Chúng Tôi</Nav.Link>
          </Nav>

          {/* User Login Section */}
          <Nav>
            <Nav.Link as={Link} to="/login" className="nav-item-custom">
              <FaSignInAlt className="nav-icon" /> Đăng nhập
            </Nav.Link>
            <Nav.Link as={Link} to="/register" className="nav-item-custom">
              <FaUserPlus className="nav-icon" /> Đăng ký
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
