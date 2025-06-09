import React from "react";

const API_URL = process.env.REACT_APP_API_URL || "/api/feedback";

class Feedback extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    success: false,
    error: "",
    loading: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, error: "", success: false });
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
    return (
      <main>
        <div id="section-Feedback">
          <div className="feedback-form">
            <h2>Gửi Phản Hồi</h2>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">Họ tên</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={this.state.name}
                onChange={this.handleChange}
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={this.state.email}
                onChange={this.handleChange}
              />

              <label htmlFor="message">
                Gửi lại feedback cho chúng mình nha !
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={this.state.message}
                onChange={this.handleChange}
              ></textarea>

              <button type="submit" disabled={this.state.loading}>
                {this.state.loading ? "Đang gửi..." : "Gửi"}
              </button>
            </form>

            {this.state.success && (
              <p style={{ color: "green", fontWeight: "bold", textAlign: "center" }}>
                Gửi phản hồi thành công!
              </p>
            )}
            {this.state.error && (
              <p style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
                {this.state.error}
              </p>
            )}
          </div>
        </div>
      </main>
    );
  }
}

export default Feedback;
