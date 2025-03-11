import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const GioHang = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Lỗi khi tải giỏ hàng từ localStorage:", error);
      setCartItems([]);
    }
  }, []);

  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.dispatchEvent(new Event("storage"));
  };

  const increaseQuantity = (id) => {
    const newCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(newCart);
  };

  const decreaseQuantity = (id) => {
    const newCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateCart(newCart);
  };

  const removeItem = (id) => {
    const newCart = cartItems.filter((item) => item.id !== id);
    updateCart(newCart);
  };

  const totalPrice = cartItems.reduce((acc, item) => {
  let originalPrice = 0;

  if (!isNaN(item.price)) {
    // Nếu giá trị là số nguyên, gán trực tiếp
    originalPrice = Number(item.price);
  } else if (typeof item.price === "string") {
    // Nếu giá trị là chuỗi, loại bỏ tất cả ký tự không phải số trước khi chuyển đổi
    originalPrice = item.price.toLowerCase().includes("miễn phí") 
      ? 0 
      : parseInt(item.price.replace(/[^\d]/g, ""), 10) || 0;
  }

  const discount = isNaN(item.discount) ? 0 : Number(item.discount); // Xử lý discount không phải số
  const discountPrice = discount > 0 ? Math.round(originalPrice * (1 - discount / 100)) : originalPrice;

  return acc + discountPrice * item.quantity;
}, 0);


  // Xử lý kiểm tra giỏ hàng trống trước khi mua hàng
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("🛒 Giỏ hàng trống! Vui lòng thêm sản phẩm trước khi thanh toán.");
    } else {
      navigate("/ThanhToan");
    }
  };

  return (
    <Container className="mt-4">
      <h4 className="fw-bold text-white">Giỏ hàng của bạn ({cartItems.length})</h4>

      <Row>
        <Col md={8}>
          {cartItems.length > 0 ? (
            cartItems.map((item) => {
              const originalPrice =
                item.price.toLowerCase().includes("miễn phí") ? 0 : parseInt(item.price.replace(/\D/g, "")) || 0;

              const discountPrice = item.discount
                ? Math.round(originalPrice * (1 - item.discount / 100))
                : originalPrice;

              return (
                <Card key={item.id} className="mb-3 p-3 text-white" style={{ backgroundColor: "#333333" }}>
                  <Row className="align-items-center">
                    <Col xs={2} className="text-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid rounded"
                        style={{
                          height: "130px",
                          width: "100px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    </Col>
                    <Col xs={4}>
                      <h6 className="fw-bold">{item.title}</h6>
                      <p style={{ color: "#cccccc", backgroundColor: "#444", padding: "2px 5px", borderRadius: "5px" }}>
                        {item.category}
                      </p>
                    </Col>
                    <Col xs={2} className="text-center">
                      <p className="text-danger fw-bold">
                        {discountPrice > 0 ? `${discountPrice.toLocaleString()}đ` : "0đ"}
                      </p>
                      {originalPrice > 0 && item.discount > 0 && (
                        <>
                          <p className="text-white text-decoration-line-through mb-0">
                            {originalPrice.toLocaleString()}đ
                          </p>
                          <p className="text-success">-{item.discount}%</p>
                        </>
                      )}
                    </Col>
                    <Col xs={2} className="d-flex align-items-center justify-content-center">
                      <Button
                        onClick={() => decreaseQuantity(item.id)}
                        className="btn-sm mx-1 d-flex align-items-center justify-content-center"
                        style={{
                          backgroundColor: "#444",
                          color: "white",
                          border: "none",
                          width: "25px",
                          height: "25px",
                          fontSize: "0.75rem",
                          padding: "0",
                        }}
                      >
                        <FaMinus />
                      </Button>
                      <span className="text-white fw-bold" style={{ width: "26px", textAlign: "center" }}>
                        {item.quantity}
                      </span>
                      <Button
                        onClick={() => increaseQuantity(item.id)}
                        className="btn-sm mx-1 d-flex align-items-center justify-content-center"
                        style={{ backgroundColor: "#444", color: "white", border: "none", width: "25px", height: "25px" }}
                      >
                        <FaPlus />
                      </Button>
                    </Col>
                    <Col xs={2} className="text-center">
                      <Button onClick={() => removeItem(item.id)} className="btn-sm" style={{ backgroundColor: "#444", color: "white", border: "none", width: "30px", height: "30px" }}>
                        <FaTrash />
                      </Button>
                    </Col>
                  </Row>
                </Card>
              );
            })
          ) : (
            <p className="text-white text-center mt-3">🛒 Giỏ hàng trống! Hãy thêm sản phẩm ngay.</p>
          )}
        </Col>

        <Col md={4}>
          <Card className="p-3 text-white" style={{ backgroundColor: "#333333" }}>
            <h6 className="fw-bold">Mã ưu đãi </h6>
            <Form.Control type="text" placeholder="Nhập mã giảm giá" className="mb-3" />
            <hr style={{ borderColor: "#555" }} />
            <h6 className="text-white">Tạm tính: <span className="fw-bold text-danger">{totalPrice.toLocaleString()}đ</span></h6>
            <Button variant="danger" className="w-100 mt-2" onClick={handleCheckout}>Mua ngay</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default GioHang;
