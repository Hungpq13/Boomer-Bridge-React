import React from "react";

class Diphiloabout extends React.Component {
  render() {
    const { ManageUser } = this.props;
    if (!ManageUser || !Array.isArray(ManageUser)) return null; // Thêm dòng này

    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {ManageUser.map((item) => {
            return (
              <>
                <div
                  className="container"
                  style={{
                    backgroundColor: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="right-section">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div
                        className="container"
                        style={{
                          backgroundColor: "#fff",
                          marginTop: "50px",
                          marginBottom: "50px",
                        }}
                      >
                        <div class="container-avt">
                          <div class="rectangle-box">
                            <p>.</p>
                          </div>
                          <div class="circle-overlap">
                            <img
                              src={item.image}
                              alt={item.name}
                              class="circle-image"
                            />
                          </div>
                        </div>

                        <h1 className="highlight">{item.name}</h1>
                        <h3 className="tag">
                          {item.title} | Sinh viên Trường Khoa học Xã hội và
                          Nhân văn - ĐHQG HCM
                        </h3>
                      </div>
                    </div>
                    <div className="container box-container">
                      <p
                        style={{
                          fontWeight: "bold",
                          margin: "30px 30px 0",
                        }}
                      >
                        Media
                      </p>
                      <div
                        className="social-links"
                        style={{
                          margin: "30px",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {Object.entries(item.socials).map(([platform, url]) =>
                          url ? (
                            <p>
                              <a
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                className="social-icon"
                                key={platform}
                              >
                                <i className={`fab fa-${platform}`}></i>{" "}
                                <span className="social-link-url">{url}</span>{" "}
                              </a>
                            </p>
                          ) : null
                        )}
                      </div>
                    </div>
                    <div className="container box-container">
                      <p
                        style={{
                          fontWeight: "bold",
                          margin: "30px 30px 0",
                        }}
                      >
                        About me
                      </p>
                      <p style={{ margin: "30px" }}>
                        {" "}
                        {item.more_description}{" "}
                      </p>
                    </div>
                    <div className="container box-container">
                      <p
                        style={{
                          fontWeight: "bold",
                          margin: "30px 30px 0",
                        }}
                      >
                        Triết lý học tập số
                      </p>
                      <p style={{ margin: "30px" }}>
                        {" "}
                        {item.Digital_learning_philosophy}{" "}
                      </p>
                    </div>

                    
                  </div>
                  <div style={{ display : "flex" , justifyContent : "space-around" , alignItems : "center" ,width : "300px" , marginBottom :"30px" }}>
                       <a
                        href={
                          item.id !== 1
                            ? `/ve-chung-toi/${item.id -1 }`
                            : `/ve-chung-toi/${6}`
                        }
                        className="btn-navigate"
                          style={{ textDecoration : "none" }}
                        title="Thành viên kế tiếp"
                      >
                        {"<"}
                      </a>
                      <a
                        href={
                          item.id !== 6
                            ? `/ve-chung-toi/${item.id + 1}`
                            : `/ve-chung-toi/${1}`
                        }
                        className="btn-navigate"
                        style={{ textDecoration : "none" }}
                        title="Thành viên trước đó "
                      >
                         {">"}
                      </a>

                     
                    </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default Diphiloabout;
