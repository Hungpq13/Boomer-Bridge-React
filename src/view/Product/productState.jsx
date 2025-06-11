import React from "react";
import Productcardlist from "./productcardlist";

function getEmbedUrl(link) {
  // Nếu link đã là dạng embed thì giữ nguyên
  if (link.includes("/embed/")) return link;
  // Nếu là dạng watch?v= thì chuyển sang embed
  const match = link.match(/v=([^&]+)/);
  if (match) return `https://www.youtube.com/embed/${match[1]}`;
  return link;
}

class ProductState extends React.Component {
  state = {
    listproduct: [
      { 
        id: 1, 
        link: "https://www.youtube.com/watch?v=foyd9P-3xwk", 
        title :"Thế hệ Baby Boomers - Hành trình định hình thế giới hiện đại" },
      { id: 2,
        link: "https://www.youtube.com/watch?v=aP1XMM4bWqg",
        title :"Thế hệ Baby Boomers và Công nghệ - Từ máy đánh chữ đến máy" 
      },
      { 
        id: 3, 
        link: "https://www.youtube.com/watch?v=q-YbcadTTSY",
        title :"Thế hệ Baby Boomers và Giáo dục - Từ lớp học làng quê đến cánh cổng đại học" 
     },
      { 
        id: 4, 
        link: "https://www.youtube.com/watch?v=0rvVLbQAZZE", 
         title :"Thế hệ Baby Boomers và Gia đình - Những người dựng lại mái ấm từ tro tàn"
     },
     { 
        id: 5, 
        link: "https://www.youtube.com/watch?v=TDp2AclWgjw", 
        chapter : "Video giới thiệu về Gen X",
        title :"Nhóm 6 - GDHK2022 - Môn Học Tập Trong Thời Kỳ Chuyển Đổi Số - USSH HCM"
     },
     { 
        id: 6, 
        link: "https://www.youtube.com/watch?v=kzK8zwnqwSo", 
        chapter: 'Video Review Digital Aistotle',
         title :"🫧𓇼𓏲*ੈ✩‧₊˚🎐 VIDEO CUỐI KÌ NHÓM 6 - [ GEN X ] - HỌC TẬP TRONG THỜI KỲ CHUYỂN ĐỔI SỐ ˚˖🫧𓇼𓏲*ੈ✩‧₊˚🎐"
     },
     
    ].map((item) => ({ ...item, link: getEmbedUrl(item.link) })),
  };

  render() {
    return (
      <>
        <Productcardlist listproduct={this.state.listproduct} />
      </>
    );
  }
}

export default ProductState;
