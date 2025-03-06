import { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

function About() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container className="mt-5 p-4 rounded" style={{ backgroundColor: "#d3d3d3" }}>
      <Row className="justify-content-center">
        <Col md={10}>
          <Row className="g-0 align-items-center">
            <Col md={12}>
              <Card.Body className="p-4 text-center">
              <h1 className="animated-title">About Me</h1>
                <p className="text-muted">
                  Chúng tôi cung cấp dịch vụ đọc sách chất lượng và thỏa mãn đam mế sáng tác của các tác giả trên toàn Thế Giới
                  <br />
                  Các câu chuyện luôn được kiểm duyệt một các kĩ càng trước khi đăng tải. 
                </p>
                <p className="reading-tagline">📚 Read. ✨ Imagine. 🖋️ Create.</p>

                {/* Nút mở modal với hiệu ứng */}
                <Button
                   variant="danger"
                  className="animated-button"
                  onClick={() => setShowModal(true)}
                >
                  Chi Tiết
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Modal Hiển Thị Thông Tin */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
        contentClassName="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Thông Tin Về Chúng Tôi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>📌 Lịch sử & Quá trình phát triển</h4>
          <p>
            Chúng tôi được thành lập vào năm 2020 với sứ mệnh mang đến trải nghiệm đọc sách tuyệt vời cho tất cả mọi người.
            Trong suốt những năm qua, chúng tôi đã phát triển và mở rộng quy mô trên toàn cầu.
          </p>

          <h4>👨‍💻 Nhân sự & Bộ phận chịu trách nhiệm</h4>
          <ul>
            <li><strong>CEO:</strong> Nguyễn Văn A</li>
            <li><strong>Trưởng phòng kỹ thuật:</strong> Trần Thị B</li>
            <li><strong>Trưởng phòng thiết kế:</strong> Lê Văn C</li>
            <li><strong>Nhóm phát triển web:</strong> 10 thành viên tài năng</li>
          </ul>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="danger" className="animated-button" onClick={() => setShowModal(false)}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>

      {/* CSS tùy chỉnh */}
      <style>
        {`
          .animated-button {
            display: inline-block;
            width: 200px; /* Tăng chiều ngang */
            padding: 12px 20px;
            font-weight: bold;
            transition: all 0.3s ease-in-out;
            border: 2px solid transparent;
            position: relative;
            overflow: hidden;
          }

          .animated-button::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.2);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.3s ease-in-out;
          }

          .animated-button:hover::before {
            transform: scaleX(1);
          }

          .animated-button:hover {
            border-color: white;
          }
          
          /* Căn giữa nội dung trong Footer */
          .custom-modal .modal-footer {
            display: flex;
            justify-content: center;
          }

          /* Modal màu be */
          .custom-modal {
            background-color: #f5f5dc !important; /* Màu be */
            border-radius: 10px;
            color: black; /* Đảm bảo chữ hiển thị rõ */
          }

          .custom-modal .modal-header,
          .custom-modal .modal-body,
          .custom-modal .modal-footer {
            background-color: #f5f5dc !important; /* Đồng bộ màu nền */
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }

          .custom-modal .modal-title {
            color: black !important; /* Chữ màu đen */
          }


          .reading-tagline {
            color: #2c3e50;
            font-weight: bold;
            font-size: 1.2rem;
          }

          @keyframes wave {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(5deg); }
            50% { transform: rotate(0deg); }
            75% { transform: rotate(-5deg); }
            100% { transform: rotate(0deg); }
          }

          .animated-title {
            display: inline-block;
            color: #1abc9c; /* Màu xanh giống Universe of Books */
            font-weight: bold;
            animation: wave 1s infinite ease-in-out; /* Lặp vô hạn */
          }
            
        `}
      </style>
    </Container>
  );
}

export default About;
