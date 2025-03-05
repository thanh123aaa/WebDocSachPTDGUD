import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Cột Hướng dẫn khách hàng */}
        <div className="footer-column">
          <h3 className="h31">HƯỚNG DẪN KHÁCH HÀNG</h3>
          <ul>
            <li><a href="#">Trung tâm hỗ trợ</a></li>
            <li><a href="#">Câu hỏi thường gặp</a></li>
            <li><a href="#">Chính sách đổi trả</a></li>
            <li><a href="#">Chính sách bảo mật</a></li>
            <li><a href="#">Chính sách bảo hành</a></li>
            <li><a href="#">Hướng dẫn mua hàng</a></li>
            <li><a href="#">Hướng dẫn tạo tài khoản</a></li>
          </ul>
        </div>

        {/* Cột Về Universe Of Books */}
        <div className="footer-column">
          <h3>VỀ UNIVERSE OF BOOKS</h3>
          <ul>
            <li><a href="#">Giới thiệu</a></li>
            <li><a href="#">Blogs Kiến thức</a></li>
            <li><a href="#">Cam kết và đảm bảo</a></li>
            <li><a href="#">Liên hệ</a></li>
          </ul>
        </div>

        {/* Cột Hỗ trợ thanh toán */}
        <div className="footer-column">
          <h3>HỖ TRỢ THANH TOÁN</h3>
          <div className="payment-icons">
            <img  src="/img/1.webp" alt="Visa" />
          </div>
        </div>
      </div>

      {/* Bản quyền và Mạng xã hội */}
      <div className="footer-bottom">
        <p>&copy; 2025 Công ty cổ phần TMDV Universe Of Books. All rights reserved.</p>
        <p>Địa chỉ: 14 Nguyễn Văn Bảo, P. 4, Q. Gò Vấp, HCM.</p>
        <p>Hotline: 0987654321</p>

        {/* Mạng xã hội */}
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
