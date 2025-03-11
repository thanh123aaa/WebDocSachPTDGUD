import React, { useState, useEffect } from "react";
import { Container, Card, Button, Form, Row, Col, Modal, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaMoneyBillWave, FaCcVisa, FaMobileAlt } from "react-icons/fa";

const ThanhToan = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(amount);
  };

 const totalPrice = cartItems.reduce((acc, item) => {
  const price = parseInt(item.price.replace(/\D/g, "")) || 0;
  const discountedPrice = item.discount ? Math.round(price * (1 - item.discount / 100)) : price;
  return discountedPrice > 0 ? acc + discountedPrice * item.quantity : acc; // Không cộng sản phẩm miễn phí
}, 0);


  const validateForm = () => {
    if (!name.trim() || !phone.trim() || !address.trim()) {
      setErrorMessage("Vui lòng nhập đầy đủ thông tin.");
      return false;
    }
    if (!/^\d{10,11}$/.test(phone)) {
      setErrorMessage("Số điện thoại không hợp lệ.");
      return false;
    }
    if (!paymentMethod) {
      setErrorMessage("Vui lòng chọn phương thức thanh toán.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handlePayment = () => {
    if (validateForm()) {
      localStorage.removeItem("cart");
      setShowModal(true);
    }
  };

  return (
    <Container className="mt-4">
      <h4 className="text-white fw-bold">Thanh toán</h4>
      <Row>
        {/* Cột Trái - Thông tin đơn hàng */}
        <Col md={6}>
          <Card className="p-3 text-white" style={{ backgroundColor: "#333" }}>
            <h6>Thông tin đơn hàng</h6>
            {cartItems.map((item) => {
              const price = parseInt(item.price.replace(/\D/g, "")) || 0;
              const discountedPrice = item.discount ? Math.round(price * (1 - item.discount / 100)) : price;
              return (
                <p key={item.id}>
  {item.title} x {item.quantity} -{" "}
  {price > 0 ? (
    <>
      <del className="text-danger">{formatCurrency(price)}</del>{" "}
      <strong className="text-success">{formatCurrency(discountedPrice)}</strong>
    </>
  ) : (
    <strong className="text-primary">Miễn phí</strong>
  )}
</p>

              );
            })}
            <h6 className="text-danger">Tổng tiền: {formatCurrency(totalPrice)}</h6>
          </Card>
        </Col>

        {/* Cột Phải - Nhập thông tin và Thanh toán */}
        <Col md={6}>
          <Card className="p-3 text-white" style={{ backgroundColor: "#222" }}>
            <h6>Nhập thông tin khách hàng</h6>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <Form>
              <Form.Group as={Row} className="mb-2">
                <Form.Label column sm={3}>Tên:</Form.Label>
                <Col sm={9}>
                  <Form.Control 
                    type="text" 
                    className="input-hover" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-2">
                <Form.Label column sm={3}>SĐT:</Form.Label>
                <Col sm={9}>
                  <Form.Control 
                    type="text" 
                    className="input-hover" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-2">
                <Form.Label column sm={3}>Địa chỉ:</Form.Label>
                <Col sm={9}>
                  <Form.Control 
                    type="text" 
                    className="input-hover" 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                  />
                </Col>
              </Form.Group>
            </Form>

            <h6>Phương thức thanh toán</h6>
            <div className="d-flex gap-2 mb-3">
              <Button 
                variant={paymentMethod === "cash" ? "success" : "outline-light"} 
                onClick={() => setPaymentMethod("cash")}
              >
                <FaMoneyBillWave /> Tiền mặt
              </Button>
              <Button 
                variant={paymentMethod === "momo" ? "success" : "outline-light"} 
                onClick={() => setPaymentMethod("momo")}
              >
                <FaMobileAlt /> Momo
              </Button>
              <Button 
                variant={paymentMethod === "bank" ? "success" : "outline-light"} 
                onClick={() => setPaymentMethod("bank")}
              >
                <FaCcVisa /> Ngân hàng
              </Button>
            </div>

            <Button 
              style={{ backgroundColor: "#20c997" }} 
              className="w-100 mt-2" 
              onClick={handlePayment}
            >
              Xác nhận thanh toán
            </Button>
          </Card>
        </Col>
      </Row>

      {/* Modal Thanh toán thành công */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton style={{ backgroundColor: "#222", borderBottom: "none" }}>
          <Modal.Title className="text-white">🎉 Thanh toán thành công!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center text-white" style={{ backgroundColor: "#333" }}>
          Đã Thanh Toán Thành Công. Bạn muốn?
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#222", borderTop: "none" }}>
          <Button 
            style={{
              backgroundColor: "transparent", 
              border: "2px solid white", 
              color: "white", 
              fontWeight: "bold",
              padding: "8px 20px"
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
            onClick={() => navigate("/")}
          >
            🏠 Về trang chủ
          </Button>
          <Button 
            style={{
              backgroundColor: "transparent", 
              border: "2px solid white", 
              color: "white", 
              fontWeight: "bold",
              padding: "8px 20px"
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
            onClick={() => navigate("/giohang")}
          >
            🛒 Về giỏ hàng
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ThanhToan;
