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
            {/* <iframe src="https://scratch.mit.edu/projects/1184221086/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen title="game"></iframe> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
