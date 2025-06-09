import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <main>
        <div id="section-Contact" style={{ marginBottom : "20px" }} >
          <div className="container" style={{ width : "70%" , height : "500px" }}>
          <h1>Liên hệ chúng tôi</h1>
          <div style={{ maxWidth: 420, width: "80%", margin: "0 auto" }}>
            <div style={{display: "flex" , flexDirection : "column"}}>
              <h2>Thông tin liên hệ</h2>
              <ul style={{ listStyle: "none", padding: 0, color: "#333", fontSize: "1.1em" }}>
                <li><b>Người nhận mail</b></li>
                  <li> <h2> Vũ Minh Hằng</h2> </li>
                <li><b>Email:</b> <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNvNGPDcmMgsrQFHdDkfFDFzzVqdCGmMgBPvXsSPlrwKDdqjgrnLVbXGStQRNmflLBqFGB" target="_blank" rel="noopener noreferrer">hangvuforwork@gmail.com</a></li>
                <li><b>Điện thoại:</b> 0123 456 789</li>
              </ul>
            </div>
            <div>
              <h2>Kết nối mạng xã hội</h2>
              <div className="socialIcons">
                <a href="https://www.messenger.com/e2ee/t/7804946312920217" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-messenger"></i>
                </a>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNvNGPDcmMgsrQFHdDkfFDFzzVqdCGmMgBPvXsSPlrwKDdqjgrnLVbXGStQRNmflLBqFGB" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div></div>
      </main>
    );
  }
}

export default Contact;