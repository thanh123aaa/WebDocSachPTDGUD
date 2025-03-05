import React, { useState, useEffect } from "react";
import { Container, Carousel, Card, Button } from "react-bootstrap";
import banner1 from "../img/bn2.png";
import banner2 from "../img/bg11.png";
import banner3 from "../img/lg8.png";
import banner4 from "../img/LG6.png";
import banner5 from "../img/bn1.png";
import "../App.css";

const products = [
  {
    id: 1,
    title: "Sách A",
    image: "https://via.placeholder.com/150",
    category: "Mới Nhất",
    price: "100.000đ",
  },
  {
    id: 5,
    title: "Sách A",
    image: "https://via.placeholder.com/150",
    category: "Mới Nhất",
    price: "100.000đ",
  },
  {
    id: 6,
    title: "Sách A",
    image: "https://via.placeholder.com/150",
    category: "Mới Nhất",
    price: "100.000đ",
  },
  {
    id: 7,
    title: "Sách A",
    image: "https://via.placeholder.com/150",
    category: "Mới Nhất",
    price: "100.000đ",
  },
  {
    id: 8,
    title: "Sách A",
    image: "https://via.placeholder.com/150",
    category: "Mới Nhất",
    price: "100.000đ",
  },
  {
    id: 9,
    title: "Sách A",
    image: "https://via.placeholder.com/150",
    category: "Mới Nhất",
    price: "100.000đ",
  },
  {
    id: 10,
    title: "Sách A",
    image: "https://via.placeholder.com/150",
    category: "Mới Nhất",
    price: "100.000đ",
  },
  {
    id: 2,
    title: "Sách B",
    image: "https://via.placeholder.com/150",
    category: "Sách miễn phí",
    price: "Miễn phí",
  },
  {
    id: 3,
    title: "Sách C",
    image: "https://via.placeholder.com/150",
    category: "Thơ - Tản Văn",
    price: "120.000đ",
  },
  {
    id: 4,
    title: "Sách D",
    image: "https://via.placeholder.com/150",
    category: "Tác Phẩm Kinh Điển",
    price: "150.000đ",
  },
];

const categories = [
  { id: "product-sales", title: "Mới Nhất" },
  { id: "sanpham-banchay", title: "Sách miễn phí" },
  { id: "sach-banchay", title: "Thơ - Tản Văn" },
  { id: "sanpham-moinhat", title: "Tác Phẩm Kinh Điển" },
];

function Home() {
  const [isCarouselActive, setIsCarouselActive] = useState(false);

  useEffect(() => {
    // Kiểm tra xem có vượt quá 4 sản phẩm không
    if (products.length > 4) {
      setIsCarouselActive(true);
    }
  }, []);

  return (
    <Container className="mt-4 custom-container">
      <marquee>
        Nhập mã <b>sale10</b> để được giảm ngay 10% cho lần đầu đăng kí hội viên. Áp dụng hết 1/2/2025
      </marquee>

      {/* Carousel with controls */}
      <Carousel className="w-100 h-auto border-0" controls>
        {[banner1, banner2, banner3, banner4, banner5].map((banner, index) => (
          <Carousel.Item key={index}>
            <img src={banner} className="d-block mx-auto" alt={`Banner ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Danh sách sách theo danh mục */}
      {categories.map((section, index) => (
        <div className="pt-md-5" key={index}>
          <h3 className="text-uppercase custom-title">{section.title}</h3>
          <div className="d-flex flex-wrap justify-content-start">
            {products
              .filter((product) => product.category === section.title)
              .slice(0, 4) // Hiển thị 4 sản phẩm đầu tiên
              .map((product) => (
                <div key={product.id} className="col-md-3 mb-4">
                  <Card>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>{product.price}</Card.Text>
                      <Button variant="primary">Xem Chi Tiết</Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </div>

          {/* Nếu có nhiều hơn 4 sản phẩm, sử dụng carousel */}
          {isCarouselActive && (
            <Carousel
              id={section.id}
              className="product-carousel mt-4"
              indicators={false}
              controls={true}
            >
              {products
                .filter((product) => product.category === section.title)
                .slice(4) // Bắt đầu từ sản phẩm thứ 5
                .map((product) => (
                  <Carousel.Item key={product.id}>
                    <Card>
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>{product.price}</Card.Text>
                        <Button variant="primary">Xem Chi Tiết</Button>
                      </Card.Body>
                    </Card>
                  </Carousel.Item>
                ))}
            </Carousel>
          )}
        </div>
      ))}
    </Container>
  );
}

export default Home;
