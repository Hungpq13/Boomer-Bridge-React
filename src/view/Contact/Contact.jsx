import React from "react";

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
            {" "}
            <h1>Liên hệ với chúng tôi</h1>
            <h2>Khoa giáo dục - Đại học Khoa học Xã hội & Nhân văn TP HCM</h2>
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
          </div>{" "}
        </div>
      </main>
    );
  }
}

export default Contact;
