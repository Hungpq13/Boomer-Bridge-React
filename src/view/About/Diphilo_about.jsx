import React from "react";

class Diphiloabout extends React.Component {
  state = {
    video: require("../../video/VMH_introduce.mP4"),
  };
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

                    {item.id === 2? <>
                     <div className="fb-post-container">
                      <div className="fb-post-header">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="fb-avatar"
                        />
                        <div>
                          <span className="fb-post-author">{item.name}</span>
                          <div className="fb-post-time">
                            Vừa xong · <i className="fas fa-globe-asia"></i>
                          </div>
                        </div>
                       
                        
                      </div>
                       <div> <p style={{ margin: "30px" }}>
                          Video giới thiệu bản thân. 
                         </p></div>
                      <div className="fb-post-content">
                        <p
                          style={{
                            margin: "18px 0 18px 0",
                            fontWeight: "bold",
                          }}
                        >
                        </p>
                        <div className="fb-video-wrapper">
                          <video
                            src={this.state.video}
                            width="100%"
                           
                            controls
                            style={{ borderRadius: "12px", background: "#000" }}
                          />
                        </div>
                      </div>
                    </div>
                  
                    
                    </> 
                    
                    
                    : <></> }
                   </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      width: "300px",
                      marginBottom: "30px",
                    }}
                  >
                    <a
                      href={
                        item.id !== 1
                          ? `/ve-chung-toi/${item.id - 1}`
                          : `/ve-chung-toi/${6}`
                      }
                      className="btn-navigate"
                      style={{ textDecoration: "none" }}
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
                      style={{ textDecoration: "none" }}
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
