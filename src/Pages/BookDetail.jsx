import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button, Modal } from "react-bootstrap";
import { products } from "../Pages/Home"; // ✅ Import danh sách sách

function BookDetail() {
  const { id } = useParams(); // ✅ Lấy ID sách từ URL
  const navigate = useNavigate(); // ✅ Điều hướng trang
  const book = products.find((item) => item.id === parseInt(id, 10));
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Khởi tạo giỏ hàng nếu chưa có trong Local Storage
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  const handleAddToCart = () => {
    if (!book) return;

    // Lấy giỏ hàng từ Local Storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Kiểm tra nếu sách đã có trong giỏ hàng
    const existingItem = cart.find((item) => item.id === book.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...book, quantity: 1 });
    }

    // Lưu lại giỏ hàng vào Local Storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Hiển thị modal
    setShowModal(true);
  };

  if (!book) {
    return <h2 className="text-center text-white mt-5">Sách không tồn tại!</h2>;
  }

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card className="book-detail-card">
        <Card.Img variant="top" src={book.image} className="book-detail-img" />
        <Card.Body>
          <h2 className="text-center">{book.title}</h2>
          <p className="text-muted text-center">{book.category}</p>
          <h4 className="text-danger text-center">
  {isNaN(Number(book.price.replace(/[^\d]/g, "")))
    ? book.price  // Nếu không thể chuyển đổi, giữ nguyên chuỗi (VD: "Miễn phí")
    : `${new Intl.NumberFormat("vi-VN").format(Number(book.price.replace(/[^\d]/g, "")))} ₫`}
</h4>

          <p className="book-description">
            Đây là mô tả chi tiết về cuốn sách này. Bạn có thể cập nhật thông tin tại đây.
          </p>
          <Button variant="success" className="w-100" onClick={handleAddToCart}>
            Thêm Vào Giỏ Hàng
          </Button>
        </Card.Body>
      </Card>

      {/* Modal Thêm vào giỏ hàng thành công */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton style={{ backgroundColor: "#222", borderBottom: "none" }}>
          <Modal.Title className="text-white">🎉 Đã thêm vào giỏ hàng!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center text-white" style={{ backgroundColor: "#333" }}>
          Sản phẩm đã được thêm vào giỏ hàng. Bạn muốn?
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#222", borderTop: "none" }}>
          <Button
            style={{
              backgroundColor: "transparent",
              border: "2px solid white",
              color: "white",
              fontWeight: "bold",
              padding: "8px 20px",
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
              padding: "8px 20px",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
            onClick={() => navigate("/giohang")}
          >
            🛒 Xem giỏ hàng
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default BookDetail;
