import React from "react";
import Imgproject from "../../images/project-banner.jpg";
class Game extends React.Component {
  render() {
    return (
      <main>
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
                - Gợi lại bối cảnh đời sống thời bao cấp <br />- Rèn luyện kỹ
                năng số cơ bản thông qua thao tác chơi game <br />
                - Gắn kết công nghệ hiện đại với ký ức truyền thống <br />
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
 
export default Game 