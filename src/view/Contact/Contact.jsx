import React from "react";
import bannerImg from "../../images/feedback-banner.jpg";
const feedback_img = [
  {id : 1 , img: require("../../images/feedback1.jpg") }, 
  {id : 2 , img: require("../../images/feedback2.jpg") },
  {id : 3 , img: require("../../images/feedback3.jpg")},
  {id : 4 , img: require("../../images/feedback4.jpg")},
  {id : 5 , img: require("../../images/fb_web1.jpg")},
  {id : 6 , img: require("../../images/fb_web2.jpg")},
  {id : 7 , img: require("../../images/fb_web3.jpg")},
  {id : 8 , img: require("../../images/fb_web4.jpg")}
]


const API_URL = process.env.REACT_APP_API_URL || "/api/feedback";

class Contact extends React.Component {



  
  state = {
    name: "",
    email: "",
    message: "",
    success: false,
    error: "",
    loading: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: "",
      success: false,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: "", success: false });

    try {
      // Gửi dữ liệu feedback tới backend API (ví dụ: /api/feedback)
      // http://localhost:5000/api/feedback API test
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          message: this.state.message,
        }),
      });

      if (response.ok) {
        this.setState({
          name: "",
          email: "",
          message: "",
          success: true,
          loading: false,
        });
      } else {
        this.setState({
          error: "Gửi phản hồi thất bại. Vui lòng thử lại.",
          loading: false,
        });
      }
    } catch (err) {
      this.setState({
        error: "Có lỗi xảy ra. Vui lòng thử lại.",
        loading: false,
      });
    }
  };

  render() {
    const LATITUDE = 10.87194037527797
    const LONGITUDE = 106.80208647005335;
    const MAP_URL = `https://www.google.com/maps?q=${LATITUDE},${LONGITUDE}&hl=vi&z=16&output=embed`;
    return (
      <main>
        <div id="section-Contact">
            <div className="container">
           <div className="boomer-banner-wrapper">
            <img
              src={bannerImg}
              alt="Baby Boomer Banner"
              className="boomer-banner-img"
            />
          </div>
      </div>
         
          <div className="container">
  
            <h1>Liên hệ và gửi feedback với chúng tôi</h1>
            <p style={{ color : "black" , fontWeight:"100" }}>Khoa giáo dục - Đại học Khoa học Xã hội & Nhân văn TP.HCM</p>
            <div className="container-cta">
              <div className="feedback-form">
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Họ và tên"
                  />

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Email"
                  />

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={this.state.message}
                    onChange={this.handleChange}
                    placeholder="Lời nhắn"
                  ></textarea>

                  <button type="submit" disabled={this.state.loading}>
                    {this.state.loading ? "Đang gửi..." : "Gửi"}
                  </button>
                </form>

                {this.state.success && (
                  <p
                    style={{
                      color: "green",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Gửi phản hồi thành công!
                  </p>
                )}
                {this.state.error && (
                  <p
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {this.state.error}
                  </p>
                )}
              </div>
              <div className="contact-info-col">
                <iframe
                  title="map"
                  src={MAP_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="map"
                ></iframe>
              </div>
              <div className="contact-info-list">
                <div>
                  <p><i className="fas fa-map-marker-alt"></i> </p>
                  <p>Trường Đại học Khoa
                  học Xã hội và Nhân Văn cơ sở Thủ Đức</p>
                </div>
                <div>
                  <p>  <i className="fas fa-mobile-alt"></i> </p>
                  <p>0965 376 xxx</p>
                </div>
                <div>
                 
                  <p> <i className="fas fa-envelope"></i> </p>
                  <p>hangvuforwork@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
           <div className="container">
            <h1>Feedback sản phẩm</h1>
             <h2>Feedback sản phẩm từ youtube </h2>
            { feedback_img.map(item =>   (
                  item.id <= 4 ?
                   <>   
                    <div style={{ marginBottom : "20px" }}>
                       <img
                      loading="lazy"
                      key={item.id}
                      src={item.img}
                      alt={`feedback ${item.id}`}
                      style={{ maxWidth: "1400px", width : "80%" }}
                    />
                    </div>
                </> :
                  <></>
            ))
            }
                <h2>Feedback sản phẩm gửi từ web </h2>
                 { feedback_img.map(item =>   (
                  item.id > 4 ?
                   <>   
                    <div style={{ marginBottom : "20px" }}>
                       <img
                      loading="lazy"
                      key={item.id}
                      src={item.img}
                      alt={`feedback ${item.id}`}
                      style={{ maxWidth: "1400px", width : "80%" }}
                    />
                    </div>
                </> :
                  <></>
            ))
            }

          </div>
        </div>
      </main>
    );
  }
}

export default Contact;
