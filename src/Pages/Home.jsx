import React from "react";
import { Container, Carousel, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import banner1 from "../img/bn2.png";
import banner2 from "../img/bg11.png";
import banner3 from "../img/lg8.png";
import banner4 from "../img/LG6.png";
import banner5 from "../img/bn1.png";
import "../App.css";

const products = [
  { id: 1, title: "Cuộc sống trà xanh của Thái tử điện hạ", image: "/img/SP1.png", category: "Mới Nhất", price: "250.000đ", discount: 10 },
  { id: 2, title: "Khám phá bí ẩn 12 cung hoàng đạo 2025", image: "/img/sp2.jpg", category: "Mới Nhất", price: "300.000đ", discount: 10 },
  { id: 3, title: "Yêu tinh trong lòng anh", image: "/img/sp4.png", category: "Mới Nhất", price: "400.000đ", discount: 15 },
  { id: 4, title: "Triết lý cuộc sống, lăng kính cuộc đời qua những vần thơ", image: "/img/sp4.jpg", category: "Mới Nhất", price: "100.000đ", discount: 10 },
  { id: 5, title: "Rẽ dòng đời chọn lấy một người thương", image: "/img/sp5.png", category: "Mới Nhất", price: "100.000đ", discount: 10 },
  { id: 6, title: "Đừng vì cô đơn mà nắm vội một bàn tay", image: "/img/sp7.jpg", category: "Mới Nhất", price: "200.000đ", discount: 20 },
  { id: 7, title: "Khủng hoảng danh tính - Thử thách của giới trẻ", image: "/img/sp8.jpg", category: "Sách miễn phí", price: "Miễn phí", discount: "Miễn Phí" },
  { id: 8, title: "Muôn kiếp nhân sinh 2", image: "/img/sp9.jpg", category: "Sách miễn phí", price: "Miễn phí", discount: "Miễn Phí" },
  { id: 9, title: "Nhân cách nguy hiểm", image: "/img/sp10.jpg", category: "Sách miễn phí", price: "Miễn phí", discount: 20 },
  { id: 10, title: "Siêu cấp cưng chiều - Tập 2", image: "/img/sp11.jpg", category: "Sách miễn phí", price: "Miễn phí", discount: 20 },
  { id: 11, title: "Cổ vật huyền bí - Những lời nguyền bí ẩn vượt thời gian", image: "/img/sp12.jpg", category: "Sách miễn phí", price: "Miễn phí", discount: 20 },
  { id: 12, title: "Những thuyền trưởng can đảm", image: "/img/sp13.jpg", category: "Sách miễn phí", price: "Miễn phí", discount: 20 },
  { id: 13, title: "Cánh buồm đỏ thắm", image: "/img/sp14.jpg", category: "Thơ - Tản Văn", price: "200.000đ", discount: 20 },
  { id: 14, title: "Trường ca Con lạc cháu hồng trên đỉnh Papông", image: "/img/sp15.jpg", category: "Thơ - Tản Văn", price: "Miễn phí", discount: 20 },
  { id: 15, title: "Tuyển tập những bài thơ hay nhất của thi sĩ Thế Lữ", image: "/img/sp16.jpg", category: "Thơ - Tản Văn", price: "350.000đ", discount: 10 },
  { id: 16, title: "Tuyển tập những bài thơ trữ tình tuyệt đẹp của nhà thơ Hàn Mặc Tử", image: "/img/sp17.jpg", category: "Thơ - Tản Văn", price: "Miễn phí", discount: 20 },
  { id: 17, title: "Kẹp hạt dẻ và vua chuột", image: "/img/sp22.jpg", category: "Tác Phẩm Kinh Điển", price: "599.000đ", discount: 10 },
  { id: 18, title: "Thuyền trưởng Blood", image: "/img/sp19.jpg", category: "Tác Phẩm Kinh Điển", price: "399.000đ", discount: 5 },
  { id: 19, title: "Bông hồng trên ngọn đồi xanh", image: "/img/sp20.jpg", category: "Tác Phẩm Kinh Điển", price: "499.999đ", discount: 5 },
  { id: 20, title: "Tình sử Lorna Doone - Tập 1", image: "/img/sp21.jpg", category: "Tác Phẩm Kinh Điển", price: "300.000đ", discount: 13 },
  
           
];

const categories = [
  { id: "product-sales", title: "Mới Nhất" },
  { id: "sanpham-banchay", title: "Sách miễn phí" },
  { id: "sach-banchay", title: "Thơ - Tản Văn" },
  { id: "sanpham-moinhat", title: "Tác Phẩm Kinh Điển" },
];

function Home() {
  return (
    <Container className="mt-4 custom-container">
      <marquee>
        Nhập mã <b>sale10</b> để được giảm ngay 10% cho lần đầu đăng kí hội viên. Áp dụng hết 1/2/2025
      </marquee>

      {/* Banner Carousel */}
      <Carousel className="w-100 h-auto border-0" controls>
        {[banner1, banner2, banner3, banner4, banner5].map((banner, index) => (
          <Carousel.Item key={index}>
            <img src={banner} className="d-block mx-auto" alt={`Banner ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Danh mục sách */}
      {categories.map((section) => {
        const filteredProducts = products.filter((product) => product.category === section.title);
        const hasMoreThan4Products = filteredProducts.length > 4;

        return (
          <div className="pt-md-5 text-center" key={section.id}>
           <h3 className="text-uppercase fw-bold text-white text-start">{section.title}</h3>


            {/* Swiper - Hiển thị danh sách sản phẩm */}
            <div className="swiper-container">
              <Swiper
              slidesPerView={4}
               spaceBetween={20}
               loop={true} // Kích hoạt vòng lặp
               loopedSlides={filteredProducts.length} // Đảm bảo vòng lặp hoạt động mượt mà
               navigation={{ nextEl: `.next-${section.id}`, prevEl: `.prev-${section.id}` }}
               modules={[Navigation]}
               className="mySwiper"
              >
                
                {filteredProducts.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="book-card">
                      {/* Ảnh sách */}
                      <div className="book-image">
                        <img src={product.image} alt={product.title} className="book-img" />

                        {/* Ruy băng "Hội Viên" nếu sách thuộc danh mục "Mới Nhất" */}
                        {product.price === "Miễn phí" ? (
  <div className="ribbon">Miễn phí</div>
) : product.discount ? (
  <div className="ribbon">-{product.discount}%</div>
) : null}


                        {/* Overlay hover hiển thị chi tiết */}
                        <div className="book-overlay">
                          <h4>{product.title}</h4>
                          <p className="book-price">{product.price}</p>
                          <Button variant="light">Xem Chi Tiết</Button>
                        </div>
                      </div>

                      {/* Tên sách hiển thị bên dưới */}
                      <div className="book-title">{product.title}</div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Mũi tên điều hướng */}
              {hasMoreThan4Products && (
                <div className="swiper-nav">
                  <div className={`swiper-button-prev prev-${section.id}`} />
                  <div className={`swiper-button-next next-${section.id}`} />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </Container>
  );
}

export default Home;
