import React from "react";

class Productcardlist extends React.Component {
  render() {
    let { listproduct } = this.props;

    return (
      <>
     
        {listproduct.map((item) => { return (
          item.id <=4 ?
          
            <>
              
              <div className="video-card " loading="lazy" >
                <div className="video-responsive">
                  <iframe
                    src= {item.link}
                    frameBorder= "0"
                    allowFullScreen
                    title={item.title}
                    loading="lazy"
                  ></iframe>
                </div>
                <h4 className="video-title"> Podcast tập {item.id} </h4>
                <p className="video-desc">
                 {item.title}
                </p>
              </div>
            </>  : <>
              <div className="video-card " loading="lazy" >
                <div className="video-responsive">
                  <iframe
                    src= {item.link}
                    frameBorder= "0"
                    allowFullScreen
                    title={item.title}
                    loading="lazy"
                  ></iframe>
                </div>
                <h4 className="video-title"> {item.chapter} </h4>
                <p className="video-desc">
                 {item.title}
                </p>
              </div>
            
            </>
          ) 
        })}
      </>
    );
  }
}

export default Productcardlist;
