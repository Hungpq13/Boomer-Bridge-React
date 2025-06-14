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

class Construct extends React.Component {
  render() {
    return (
      <main>
        <div id="section-Product"> 
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

export default Construct 