import React from "react";
import { withRouter } from "../withRouter"; // Tạo file withRouter.js nếu dùng React Router v6+
// hoặc dùng useNavigate trong function component

class Aboutcardlist extends React.Component {
  handleShowDetail = (user) => {
    // Chuyển hướng sang trang chi tiết với id thành viên
    this.props.navigate(`/ve-chung-toi/${user.id}`);
  };

  render() {
    // Luôn đảm bảo manageUserData là mảng
    const { manageUserData = [] } = this.props;
    return (
      <>
        {manageUserData.map((item) => (
          <div
            className="person-card"
            key={item.name}
            style={{
              transition: "height 0.3s",
              overflow: "hidden",
              height: "400px",
            }}
          >
            <img src={item.image} alt={item.name} className="avatar" />
            <h3 className="name">{item.name}</h3>
            <p className="title">{item.title}</p>
            <p className="description">{item.description}</p>
            <button
              className="read-btn"
              onClick={() => this.handleShowDetail(item)}
            >
              Profile
            </button>
            <div className="social-links">
              {Object.entries(item.socials).map(([platform, url]) =>
                url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                    key={platform}
                  >
                    <i className={`fab fa-${platform}`}></i>
                  </a>
                ) : null
              )}
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default withRouter(Aboutcardlist);
