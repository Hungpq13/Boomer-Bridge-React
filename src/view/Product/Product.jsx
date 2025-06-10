import React from "react";
import ProductState from "./productState";
import Imgproject from "../../images/project-banner.jpg";
class Product extends React.Component {
  render() {
    return (
      <div id="section-Product">
        <div className="container">
          <div className="boomer-banner-wrapper">
            <img
              src={Imgproject}
              alt="Baby Boomer Banner"
              className="boomer-banner-img"
            />
          </div>
        </div>

        <div className="container">
          <h1> Thư viện sản phẩm</h1>
          <div className="list-items ">
            <div className="grid-template library">
              <ProductState />
            </div>
          </div>
        </div>

        <div className="container">
          <h1>Game</h1>
           <div className="game-card " >
                <div className="video-responsive">
                  <iframe
                    src="https://scratch.mit.edu/projects/1184221086/embed"
                    allowtransparency="true"
                    width="485"
                    height="402"
                    frameborder="0"
                    scrolling="no"
                    allowfullscreen
                    title="game"
                  ></iframe>
                </div>
              </div>
              <div className="game-desc-card">
                <p className="video-desc">
                  <b>Chỉ dẫn :</b> 
                  <br />- Dùng chuột để di chuyển và đọc thông
                     <br />- Nếu bạn đang sử dụng điện thoại thì hãy quay ngang để có trải nghiệm tốt nhất
                  tin
                </p>
                <p className="video-desc">
                  <b>Chú thích và Dẫn nguồn :</b> <br />
                  "Mảnh Ghép Thời Gian" là một trò chơi tương tác thể loại{" "}
                  <br />
                  point-and-click mang hơi hướng rùng rợn nhẹ và hoài niệm, được
                  <br />
                  thiết kế dành cho thế hệ Baby Boomer nhằm: <br />
                  - Gợi lại bối cảnh đời sống thời bao cấp <br />
                  - Rèn luyện kỹ năng số cơ bản thông qua thao tác chơi game{" "}
                  <br />
                  - Gắn kết công nghệ hiện đại với ký ức truyền thống <br />
                </p>
                
              </div>
            
            </div>
          </div>
       
    );
  }
}

export default Product;
