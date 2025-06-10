import React from "react";

class Home extends React.Component {
  state = {
    image1: require("../../images/homeimage.png"), // ông laptop    // icon mạng xã hội
    image10: require("../../images/homeimagewoman.png"),
  };
  render() {
    return (
      <div id="section-Home">
        <div className="container">
          <div className="infographic-container">
            {/* Header với 2 hình lơ lửng */}
            <div className="boomer-title-wrapper">
              <img
                src={this.state.image1}
                alt="Boomer laptop"
                className="boomer-img left"
              />
              <h2 className="infographic-title">
                Nhu cầu trong thời đại số
                <br />
                <span className="baby-boomers">BABY BOOMERS</span>
              </h2>
              <img
                src={this.state.image10}
                alt="Boomer vui vẻ"
                className="boomer-img right"
              />
            </div>
            <p className="infographic-desc">
              Baby Boomers (1946 – 1964). Đây là nhóm nhân khẩu đến trước thế hệ
              X và nối tiếp thế hệ Im Lặng (Silent Generation).
            </p>

            {/* Nhu cầu về thể chất */}
            <section className="infographic-section physical">
              <h3>NHU CẦU VỀ THỂ CHẤT</h3>
              <ul>
                <li>Tỷ lệ mắc bệnh mãn tính cao: tăng huyết áp, tiểu đường.</li>
                <li>Quan tâm đến sức khỏe toàn diện.</li>
                <li>Chủ động trong quản lý sức khỏe.</li>
                <li>
                  Ứng dụng công nghệ hiện đại: ứng dụng y tế, thiết bị đeo thông
                  minh, tư vấn bác sĩ từ xa để theo dõi sức khỏe.
                </li>
                <li>
                  Tiêu dùng thông minh trong y tế: đo huyết áp tại nhà, theo dõi
                  giấc ngủ, mua thực phẩm chức năng trực tuyến.
                </li>
              </ul>
            </section>

            {/* Nhu cầu về tình cảm */}
            <section className="infographic-section emotional">
              <div className="section-img-group"></div>
              <h3>NHU CẦU VỀ TÌNH CẢM</h3>
              <ul>
                <li>
                  Cảm giác cô đơn khi con cháu bận rộn hoặc sống xa nhà, thiếu
                  hụt kết nối tình cảm trong gia đình.
                </li>
                <li>
                  Công nghệ số trở thành cầu nối cảm xúc, duy trì sự gắn bó với
                  người thân và cộng đồng.
                </li>
                <li>
                  Cách thức giữ liên lạc phổ biến: Video call, mạng xã hội, tin
                  nhắn...
                </li>
                <li>
                  Giá trị cảm xúc vượt lên tiện ích: Công nghệ không chỉ giúp
                  kết nối, mà còn mang lại cảm giác được quan tâm và gắn gũi.
                </li>
              </ul>
            </section>

            {/* Nhu cầu về hòa nhập */}
            <section className="infographic-section social">
              <div className="section-img-group"></div>
              <h3>NHU CẦU VỀ HÒA NHẬP</h3>
              <ul>
                <li>
                  Công nghệ giúp người cao tuổi cảm thấy tự tin, tự chủ và hòa
                  nhập với xã hội hiện đại.
                </li>
                <li>
                  Tham gia mạng xã hội, nhóm cộng đồng, chia sẻ hình ảnh và câu
                  chuyện giúp họ khẳng định bản thân và duy trì kết nối xã hội.
                </li>
                <li>
                  Mức độ hạnh phúc cao hơn ở người lớn tuổi sử dụng internet,
                  theo các nghiên cứu xã hội gần đây.
                </li>
                <li>
                  Họ có nhiều thời gian và nhu cầu kết nối, chia sẻ, đặc biệt là
                  thông qua nền tảng số.
                </li>
                <li>
                  Công nghệ không chỉ cung cấp thông tin, mà còn hỗ trợ các
                  thiết bị phục vụ cuộc sống hàng ngày, góp phần nâng cao chất
                  lượng sống.
                </li>
              </ul>
            </section>

            {/* Nhu cầu về giải trí */}
            <section className="infographic-section entertainment">
              <div className="section-img-group"></div>
              <h3>NHU CẦU VỀ GIẢI TRÍ</h3>
              <ul>
                <li>
                  Giải trí truyền thống đã mở rộng sang nền tảng số: Thay vì chỉ
                  đọc báo giấy hay xem TV, nhiều người cao tuổi giờ đây sử dụng
                  internet để đọc báo, xem video, giải trí, thể thao…
                </li>
                <li>
                  Sử dụng thành thạo thiết bị công nghệ: Một bộ phận lớn người
                  cao tuổi đã quen với smartphone, iPad để tiếp cận các nội dung
                  giải trí phong phú.
                </li>
                <li>
                  Công nghệ giúp nâng cao chất lượng giải trí và tiện ích sống:
                  Ngoài giải trí, họ còn tra cứu thông tin, mua sắm trực tuyến
                  qua mạng xã hội và sàn thương mại điện tử.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
