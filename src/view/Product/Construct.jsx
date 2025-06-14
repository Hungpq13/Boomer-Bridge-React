import React from "react";
import Imgproject from "../../images/project-banner.jpg";
class Construct extends React.Component {
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
          <h1>
            CONSTRUCTIVISM THEORY AND NOTION <br/> Bài THUYẾT TRÌNH AI AND THE
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
        </div>
      </main>
    );
  }
}

export default Construct 