import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footerContainer">
          <div className="socialIcons">
           
          </div>
          <div className="footerNav">
            <ul>
              <li>
                <a href="/">Trang chủ</a>
              </li>
              <li>
                <a href="/ve-chung-toi/gioi-thieu-thanh-vien">Về chúng tôi</a>
              </li>
              <li>
                <a href="/san-pham/video">Sản phẩm</a>
              </li>
              <li>
                <a href="/lien-he">Liên hệ</a>
              </li>
              <li>
                <a href="/feedback">Feedback</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <p>
            Copyright &copy;2025; Designed by <span className="designer">VMH</span>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
