import React from "react";
import ProductState from "./productState";
class Product extends React.Component {
  render() {
    return (
      <div id="section-Product">
        <div className="container">
           <h1> Thư viện sản phẩm</h1>  
          <div className="list-items ">
            <div className="grid-template library">
            <ProductState/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
