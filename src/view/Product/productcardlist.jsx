import React from "react";

class Productcardlist extends React.Component {
  render() {
    let { listproduct } = this.props;

    return (
      <>
     
        {listproduct.map((item) => {
          return (
            <>
              <div className="video-card">
                <div className="video-responsive">
                  <iframe
                    src= {item.link}
                    frameBorder= "0"
                    allowFullScreen
                    title={item.title}
                  ></iframe>
                </div>
                <h4 className="video-title"> Tập {item.id} </h4>
                <p className="video-desc">
                 {item.title}
                </p>
              </div>
            </>
          );
        })}
      </>
    );
  }
}

export default Productcardlist;
