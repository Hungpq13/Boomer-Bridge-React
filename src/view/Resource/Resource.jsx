import React from "react";
import ImgBanner from "../../images/resource-banner.jpg"
import ResourceUI from "./ResourceUI";
class Resource extends React.Component {
  render() {
    
    return (
      <div id="section-Resource">
        <div className="container">
          <div className="boomer-banner-wrapper">
            <img
              src={ImgBanner}
              alt="Baby Boomer Banner"
              className="boomer-banner-img"
            />
          </div>
        </div>

      <div className="container">
         <ResourceUI></ResourceUI>
      </div>

      </div>
    );
  }
}

export default Resource;
