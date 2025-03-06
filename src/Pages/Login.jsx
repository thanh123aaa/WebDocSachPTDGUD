import { useState } from "react";
import { Container, Form, Button, Card, Modal } from "react-bootstrap";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import background_login from "../img/background_login.jpg";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  function handleLoginSubmit(e) {
    e.preventDefault();
    alert(`Đăng nhập thành công! Chào mừng ${username}`);
    navigate("/");
  }

  function handleForgotPasswordSubmit(e) {
    e.preventDefault();
    alert("Đổi mật khẩu thành công!");
    setShowForgotPassword(false);
    navigate("/"); // Chuyển về trang chủ
  }

  return (
    <div className="login-bg">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className="p-4 login-card">
          <h2 className="text-center mb-4 login-title fade-in">Welcome</h2>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3 input-group">
              <span className="input-group-text"><FaUser /></span>
              <Form.Control
                type="text"
                placeholder="Số điện thoại"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 input-group">
              <span className="input-group-text"><FaLock /></span>
              <Form.Control
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 login-btn">
              Login
            </Button>

            <p className="text-center mt-3">
              <span className="forgot-password" onClick={() => setShowForgotPassword(true)}>
                Quên mật khẩu?
              </span>
            </p>
          </Form>
        </Card>
      </Container>

      {/* Modal Quên mật khẩu */}
      <Modal 
        show={showForgotPassword} 
        onHide={() => setShowForgotPassword(false)} 
        centered 
        className="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Quên mật khẩu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleForgotPasswordSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập số điện thoại"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mật khẩu mới</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nhập mật khẩu mới"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Đồng ý
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      {/* CSS tùy chỉnh */}
      <style>
        {`
          .login-bg {
            background: url(${background_login}) no-repeat center center fixed;
            background-size: cover;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .login-card {
            width: 100%;
            max-width: 400px;
            border-radius: 15px;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(8px);
            color: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }

          .fade-in {
            opacity: 0;
            animation: fadeIn 1.5s ease-in forwards;
          }

          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .input-group-text {
            background: rgba(255, 255, 255, 0.3);
            border-right: none;
            font-size: 1.2rem;
            color: white;
          }

          .form-control {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.5);
            font-size: 1rem;
            padding: 0.75rem;
          }

          .form-control::placeholder {
            color: rgba(255, 255, 255, 0.7);
          }

          .login-btn {
            border-radius: 50px;
            font-size: 1rem;
            font-weight: bold;
            padding: 0.75rem;
            color: white;
            background: linear-gradient(45deg, #008f5d, #007a4d);
            border: none;
          }

          .login-btn:hover {
            box-shadow: 0 0 10px rgba(0, 123, 255, 0.8);
          }

          .forgot-password {
            color: #00c3ff;
            font-size: 0.9rem;
            cursor: pointer;
            transition: color 0.3s ease-in-out;
          }

          .forgot-password:hover {
            color: #ff5e62;
            text-decoration: underline;
          }


           /* Đổi màu nền modal */
          .custom-modal .modal-content {
            background-color: #4d4d4d; /* Màu xám */
            color: white; /* Chữ màu trắng để dễ nhìn */
          }

          /* Đổi màu header modal */
          .custom-modal .modal-header {
            border-bottom: 1px solid #666; /* Viền nhẹ */
          }

          /* Đổi màu nền input */
          .custom-modal .form-control {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.5);
          }

          /* Placeholder màu xám nhạt */
          .custom-modal .form-control::placeholder {
            color: rgba(255, 255, 255, 0.7);
          }
        `}
      </style>
    </div>
  );
}

export default Login;
