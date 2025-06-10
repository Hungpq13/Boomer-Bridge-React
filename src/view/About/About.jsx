import React from "react";
import bannerImg from "../../images/about-us-banner.jpg";
import ManageUser from "./ManageUserData";
import Aboutcardlist from "./Aboutcardlist";

class About extends React.Component {
  render() {
    return (
      <div id="section-About">
        <div className="container">
          <div className="boomer-banner-wrapper">
            <img
              src={bannerImg}
              alt="Baby Boomer Banner"
              className="boomer-banner-img"
            />
          </div>{" "}
        </div>

        <div className="container">
          <h1>Biography</h1>

          <div className="list-items">
            <div className="grid-template">
              {/* Truyền prop đúng tên là manageUserData */}
              <Aboutcardlist manageUserData={ManageUser} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
