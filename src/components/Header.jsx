import { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaSignInAlt, FaUserPlus, FaShoppingCart } from "react-icons/fa";
import logo from "../img/lg111.jpg"; // Đảm bảo đường dẫn logo đúng
import GioHang from "../Pages/GioHang"; // Import trang giỏ hàng

function Header() {
  const location = useLocation();
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItemCount(cart.reduce((total, item) => total + item.quantity, 0));
  }, []);

  const isActive = (path) => (location.pathname.startsWith(path) ? "active-nav" : "");

  const cartBadgeStyle = {
    position: "absolute",
    top: "5px",
    right: "-10px",
    backgroundColor: "red",
    color: "white",
    fontSize: "12px",
    fontWeight: "bold",
    borderRadius: "50%",
    width: "18px",
    height: "18px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Navbar style={{ backgroundColor: "#000" }} expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="header-logo">
          <img
            src={logo}
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
          {/* Menu chính */}
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

          {/* User Section - Hiển thị dạng cột */}
          <Nav className="user-section">
            <Nav.Link as={Link} to="/login" className={`nav-item-custom ${isActive("/login")}`}>
              <FaSignInAlt className="nav-icon" /> Đăng nhập
            </Nav.Link>
            <Nav.Link as={Link} to="/register" className={`nav-item-custom ${isActive("/register")}`}>
              <FaUserPlus className="nav-icon" /> Đăng ký
            </Nav.Link>
            <Nav.Link as={Link} to="/GioHang" className={`nav-item-custom ${isActive("/GioHang")}`} style={{ position: "relative" }}>
              <FaShoppingCart className="nav-icon" /> Giỏ Hàng
              {cartItemCount > 0 && (
                <span style={cartBadgeStyle}>{cartItemCount}</span>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
