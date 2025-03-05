import { Container, Row, Col } from "react-bootstrap";

import "../css/app.css";

function Contact() {
  return (
    <Container className="mt-4 contact-container">
      <h1>Liên Hệ - Universe of Books</h1>
      <p>Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi qua biểu mẫu bên dưới.</p>
      
      <Row className="contact-content">
        <Col md={6} className="contact-image-container">
          <img src="/img/3.jpg" alt="Contact Us" className="contact-image" />
        </Col>
        <Col md={6} className="contact-form-container">
          <form action="#" method="post" className="contact-form">
            
            <input type="text" id="name" name="name" required className="input-field" placeholder="Nhập họ và tên của bạn" />

            
            <input type="email" id="email" name="email" required className="input-field" placeholder="Nhập email của bạn" />

            
            <textarea id="message" name="message" rows="5" required className="input-field" placeholder="Nhập lời nhắn của bạn"></textarea>

            <button type="submit" className="submit-button">Gửi lời nhắn</button>
          </form>
        </Col>
      </Row>
      
      <div className="map-container">
        <h3 className="h32">Vị trí của chúng tôi</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.85816909105!2d106.68427047451765!3d10.822164158349457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174deb3ef536f31%3A0x8b7bb8b7c956157b!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBUUC5IQ00!5e0!3m2!1svi!2s!4v1741169806316!5m2!1svi!2s"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Container>
  );
}

export default Contact;
