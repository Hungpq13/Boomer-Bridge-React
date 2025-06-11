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
              loading="lazy"
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
          <h1>
            {" "}
            CONSTRUCTIVISM THEORY AND NOTION - Bài thuyết trình AI AND THE
            FUTURE OF EDUCATION
          </h1>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "500px",
             paddinTop: "22.25%",
              paddingBottom: "0",
              boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
              marginTop: "1.6em",
              marginBottom: "0.9em",
              overFlow: "hidden",
              borderRadius: "8px",
              willChange: "transform",
            }}
          >
            <iframe
              loading="lazy"
              style={{
                position: "absolute",
                width: "100%",
                height: "500px",
                top: "0",
                left: "0",
                border: "none",
                padding: " 0",
                margin: "0",
              }}
              src="https://www.canva.com/design/DAGaeOop41Y/8hU0cBPXAIMNur05C7fK9g/view?embed"
              allowfullscreen="allowfullscreen"
              allow="fullscreen"
              title="canva"
            ></iframe>{" "}
          </div>
            <a
          href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGaeOop41Y&#x2F;8hU0cBPXAIMNur05C7fK9g&#x2F;view?utm_content=DAGaeOop41Y&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
          target="_blank"
          rel="noreferrer"
          className="read-btn" style={{ textDecoration :"none", width: "1%" , color : "black" , fontSize : "13px" , whiteSpace : "nowrap"  }}
        >
         Canva
        </a>
        </div>
      

        <div className="container">
          <h1>Game</h1>
          <div className="game-card ">
            <div className="video-responsive">
              <iframe
                loading="lazy"
                src="https://scratch.mit.edu/projects/1184221086/embed"
                allowtransparency="true"
                width="485"
                height="402"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
                title="game"
              ></iframe>
            </div>
          </div>
          <div className="game-desc-card">
            <p className="video-desc">
              <b>Chỉ dẫn :</b>
              <br />- Dùng chuột để di chuyển và đọc thông
              <br />- Nếu bạn đang sử dụng điện thoại thì hãy quay ngang để có
              trải nghiệm tốt nhất tin
            </p>
            <p className="video-desc">
              <b>Chú thích và Dẫn nguồn :</b> <br />
              "Mảnh Ghép Thời Gian" là một trò chơi tương tác thể loại <br />
              point-and-click mang hơi hướng rùng rợn nhẹ và hoài niệm, được
              <br />
              thiết kế dành cho thế hệ Baby Boomer nhằm: <br />
              - Gợi lại bối cảnh đời sống thời bao cấp <br />- Rèn luyện kỹ năng
              số cơ bản thông qua thao tác chơi game <br />
              - Gắn kết công nghệ hiện đại với ký ức truyền thống <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
