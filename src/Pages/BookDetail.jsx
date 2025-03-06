import { useParams } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import { products } from "../Pages/Home"; // ✅ Import danh sách sách

function BookDetail() {
  const { id } = useParams(); // ✅ Lấy ID sách từ URL
  const book = products.find((item) => item.id === parseInt(id));

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
          <h4 className="text-danger text-center">{book.price}</h4>
          <p className="book-description">
            Đây là mô tả chi tiết về cuốn sách này. Bạn có thể cập nhật thông tin tại đây.
          </p>
          <Button variant="success" className="w-100">Mua Ngay</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default BookDetail;
