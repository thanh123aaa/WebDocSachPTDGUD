import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa"; // Import icon

function Header() {
  const location = useLocation(); // Lấy URL hiện tại

  // Hàm kiểm tra xem trang nào đang active
  const isActive = (path) => (location.pathname === path ? "active-nav" : "");

  return (
    <Navbar style={{ backgroundColor: "#000" }} expand="lg" fixed="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="header-logo">
          <img
            src="../img/lg111.jpg"
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
            <Nav.Link as={Link} to="/" className={`nav-item-custom ${isActive("/")}`}>
              Trang Chủ
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={`nav-item-custom ${isActive("/contact")}`}>
              Liên Hệ
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={`nav-item-custom ${isActive("/about")}`}>
              Về Chúng Tôi
            </Nav.Link>
          </Nav>

          {/* User Login Section */}
          <Nav>
            <Nav.Link as={Link} to="/login" className={`nav-item-custom ${isActive("/login")}`}>
              <FaSignInAlt className="nav-icon" /> Đăng nhập
            </Nav.Link>
            <Nav.Link as={Link} to="/register" className={`nav-item-custom ${isActive("/register")}`}>
              <FaUserPlus className="nav-icon" /> Đăng ký
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
