import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './ProductIntro.css';

function ProductIntro() {
  return (
    <section className="product-intro carousel slide" id="productCarousel" data-bs-ride="carousel">
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="d-flex w-100 h-100">
            <div className="product-image">
              <img src="/images/Main_banner_1.png" alt="Sữa rửa mặt Sen Hậu Giang" />
            </div>
            <div className="product-info p-5">
              <h5 className="fw-bold">SẢN PHẨM MỚI</h5>
              <h1 className="fw-bold">Sữa rửa mặt Sen Hậu Giang</h1>
              <p>Với công trình nghiên cứu kỹ lưỡng...</p>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="d-flex w-100 h-100">
            <div className="product-image">
              <video autoPlay loop muted playsInline>
                <source src="/images/video_banner_2.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="product-info p-5">
              <h5 className="fw-bold">SẢN PHẨM NỔI BẬT</h5>
              <h1 className="fw-bold">Dầu tẩy trang Hoa Hồng</h1>
              <p>Giúp làm sạch sâu...</p>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div className="d-flex w-100 h-100">
            <div className="product-image">
              <img src="/images/Main_banner_3.jpg" alt="Gel dưỡng Bí Đao" />
            </div>
            <div className="product-info p-5">
              <h5 className="fw-bold">BEST SELLER</h5>
              <h1 className="fw-bold">Gel dưỡng Bí Đao</h1>
              <p>Cấp nước tức thì...</p>
            </div>
          </div>
        </div>

      </div>

      {/* Navigation */}
      <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </section>
  );
}

export default ProductIntro;
