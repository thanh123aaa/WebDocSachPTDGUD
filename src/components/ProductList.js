import React from "react";

function ProductList({ title, products }) {
  return (
    <div className="pt-md-5">
      <h3 className="text-uppercase custom-title">{title}</h3>
      <div className="row mx-0">
        {products.map((sp) => (
          <div key={sp.id} className="col-md-3 san-pham">
            <img src={sp.anh} alt={sp.ten} className="img-fluid" />
            <h4>{sp.ten}</h4>
            <p>{sp.mota}</p>
            <span className="giam-gia">{sp.phantram}</span>
            <a href={sp.link} className="chi-tiet btn btn-primary">
              Xem chi tiết
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
