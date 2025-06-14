import React from "react";
import ProductState from "./productState";
import Imgproject from "../../images/project-banner.jpg";

class Product extends React.Component {
  render() {
    return (
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
          <h1> Thư viện sản phẩm</h1>
          <div className="list-items ">
            <div className="grid-template library">
              <ProductState />
            </div>
          </div>
        </div>
</div>
    );
  }
}

export default Product;
