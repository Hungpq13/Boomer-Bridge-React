import React from "react";
import ManageUser from "./ManageUserData";

function DigitalLearningPhilosophy() {
  return (
    <main>
    <div id="section-About">
      <h1>Triết lý học tập số</h1>
      {ManageUser.map((user) => (
     <div className="container" style={{ padding: "50px" }}>
        <div
          key={user.id}
          className="dlp-row"
          style={{
            display: "flex",
            alignItems: "center",
            margin: "32px 0",
            flexDirection: user.id % 2 === 1 ? "row" : "row-reverse",
          }}
        >
          {/* Avatar + Tên */}
          <div style={{ flex: 1, textAlign: "center" }}>
            <img
            className="dlp-avatar"
              src={user.image}
              alt={user.name}
              style={{
                width: 150,
                height: 150,
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: 12,  
              
              }}
            />
            <div style={{ fontWeight: "bold", fontSize: 18 , color : "pink"  ,
             }}>{user.name}</div>
          </div>
          {/* Triết lý học tập số */}
          <div style={{ flex: 2, padding: "0 20px", fontSize: 16 }}>
            <div style={{ fontFamily:"Roboto" , fontStyle: "italic" , color : "black " , fontWeight : "300"  ,
           


            }}>"{user.Digital_learning_philosophy}"</div>
          </div>
        </div> </div>
      ))}
    </div> </main>
  );
}

export default DigitalLearningPhilosophy;