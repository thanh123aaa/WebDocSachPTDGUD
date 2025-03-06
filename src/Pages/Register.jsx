import { useState } from "react";
import { Container, Form, Button, Card, InputGroup, Modal } from "react-bootstrap";
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa";
import person_facebook from "../img/person_facbook.jpg"
import { useNavigate } from "react-router-dom";
function Register() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // State cho modal
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // "Facebook" hoặc "Google"

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (password.length < 6) {
      alert("Mật khẩu phải có ít nhất 6 ký tự!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }
    alert(`Đăng ký thành công!\nSố điện thoại: ${phone}`);
    navigate("/");
  }

  function tranferPage_Facebook(){
    alert(`Chuyển Trang Thành Công Nguyễn Ngọc Thành`);
    navigate("/");
  }
  // Mở modal khi nhấn nút mạng xã hội
  function handleOpenModal(type) {
    setModalType(type);
    setShowModal(true);
  }

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="p-4 register-card">
        <h2 className="text-center mb-3 register-title">Đăng ký tài khoản</h2>
        <p className="text-center register-subtitle">
          Đăng ký để mua và theo dõi quá trình đọc sách
        </p>

        <Form onSubmit={handleSubmit}>
          {/* Số điện thoại */}
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Số điện thoại"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </Form.Group>

          {/* Mật khẩu */}
          <Form.Group className="mb-3">
            <InputGroup>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button
                variant="outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputGroup>
            <small className="text-muted">Mật khẩu bao gồm ít nhất 6 ký tự</small>
          </Form.Group>

          {/* Nhập lại mật khẩu */}
          <Form.Group className="mb-3">
            <InputGroup>
              <Form.Control
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Nhập lại mật khẩu"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <Button
                variant="outline-secondary"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputGroup>
            <small className="text-muted">Mật khẩu bao gồm ít nhất 6 ký tự</small>
          </Form.Group>

          {/* Nút Đăng Ký */}
          <Button type="submit" className="w-100 register-btn">
            Đăng ký
          </Button>
        </Form>

        {/* Hoặc đăng ký với */}
        <p className="text-center mt-3">Hoặc đăng ký với</p>
        <div className="d-flex justify-content-center gap-3">
          <Button variant="dark" className="social-btn" onClick={() => handleOpenModal("Facebook")}>
            <FaFacebook /> Facebook
          </Button>
          <Button variant="dark" className="social-btn" onClick={() => handleOpenModal("Google")}>
            <FaGoogle /> Google
          </Button>
        </div>

        {/* Điều khoản */}
        <p className="text-center mt-3 small">
          Bằng việc nhấn “Đăng ký”, bạn đã đọc và đồng ý với{" "}
          <span className="text-primary">điều kiện</span> và{" "}
          <span className="text-primary">điều khoản</span>.
        </p>
      </Card>

    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="modal-header-custom">
            <Modal.Title className="w-100 text-center">
            <FaFacebook className="facebook-icon" /> {modalType} yêu cầu quyền truy cập
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center modal-body-custom">
            <p>Ứng dụng của bạn đang yêu cầu quyền truy cập vào:</p>
            <ul className="text-start">
            <li className="">
                <img src={person_facebook} alt="Ảnh đại diện" className="avatar-img me-2" />
                <span className="text-nowrap">Nguyễn Ngọc Thành</span>
            </li>
            </ul>
            <Button className="w-100 btn-primary mb-2" onClick={()=>{tranferPage_Facebook();}}>Tiếp tục với {modalType}</Button>
            <Button variant="danger" className="w-100" onClick={() => setShowModal(false)}>Hủy</Button>
        </Modal.Body>
    </Modal>

      {/* CSS tùy chỉnh */}
      <style>
        {`
          .register-card {
            width: 100%;
            max-width: 450px;
            padding: 2rem;
            border-radius: 15px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            color: white;
            box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }

          .register-title {
            font-weight: bold;
            font-size: 1.8rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
          }

          .form-control {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.5);
            font-size: 1rem;
            padding: 0.75rem;
          }

          .register-btn {
            border-radius: 50px;
            font-size: 1rem;
            font-weight: bold;
            padding: 0.75rem;
            color: white;
            background: linear-gradient(45deg, #008f5d, #007a4d);
            border: none;
          }

          .social-btn {
            border-radius: 50px;
            font-size: 1rem;
            font-weight: bold;
            padding: 0.5rem 1rem;
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .facebook-icon {
            color: #1877F2;
            font-size: 1.5rem;
          }

          ul {
            list-style-type: none;
            padding: 0;
          }

          ul li::before {
            content: "✔ ";
            color: green;
          }


            /* Background màu xám cho modal */
        .modal-content {
        background-color: #2c2c2c !important;
        color: white !important;
        border-radius: 10px;
        }

        /* Header của modal */
        .modal-header-custom {
        border-bottom: none;
        justify-content: center;
        }

        /* Nền xám cho body của modal */
        .modal-body-custom {
        background: #3a3a3a;
        padding: 20px;
        border-radius: 10px;
        }

        /* Icon Facebook */
        .facebook-icon {
        color: #1877F2;
        font-size: 1.5rem;
        }

        /* Nút Hủy màu đỏ */
        .btn-danger {
        background-color: #dc3545 !important;
        border-color: #dc3545 !important;
        }

        /* Nút Hủy khi hover */
        .btn-danger:hover {
        background-color: #c82333 !important;
        border-color: #bd2130 !important;
        }


        .avatar-img {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            object-fit: cover;
        }

        .text-nowrap {
            white-space: nowrap; /* Đảm bảo tên không bị xuống dòng */
        }

        `}
      </style>
    </Container>
  );
}

export default Register;
