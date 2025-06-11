import React from "react";
const capcut_ic = "https://assets.reviews.omr.com/14tubevzcob3zzbek0ei5r69wd45";
const capcut_ui =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6gDgkLsZ-pu0VZt5PtgNRIEkHaEAymvj9Q&s";
const imovie_ic =
  "https://help.apple.com/assets/670056543786E8A0E8044C94/670056581805543B8801C08F/en_US/7ed8a31ab3b640ddcc899151ffc16c9f.png";
const imovie_ui =
  "https://i.pcmag.com/imagery/reviews/02hKaREamj1Ko1Fetn3tyjv-34.fit_lim.size_1050x.png";
const wix_ic =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Wix.com_website_logo.svg/1200px-Wix.com_website_logo.svg.png";
const wix_ui =
  "https://static.wixstatic.com/media/ed8633_cb42271d14f9403f8ad60e66190ade87~mv2.jpg/v1/fill/w_540,h_338,al_c,q_80,enc_avif,quality_auto/Group%20472177414.jpg";
const canvabuilder =
  "https://content-management-files.canva.com/d418dfbb-1ae9-4066-ad85-8f6b4fd718e8/websites_ogimage_2x.png";
const notion_ic =
  "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png";
const notion_ui =
  "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F5C7NtlBoB6HzY8XIoDIHnf%2F88df067473d442a90d7798683a08cccc%2Fin_app_gallery.png&w=3840&q=75";
const todoist_ic =
  "https://cdn.prod.website-files.com/657639ebfb91510f45654149/67f6a20e82492cf3bfa08a3b_todoist-logo.webp";
const todoist_ui =
  "https://flathub.org/_next/image?url=https%3A%2F%2Fdl.flathub.org%2Fmedia%2Fcom%2Ftodoist%2FTodoist%2F777685ff74c8c00609851d10449acdff%2Fscreenshots%2Fimage-1_orig.webp&w=3840&q=75";
const mentimeter_ic =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqsMj7pvBYIPhmZcqQbJ64VcItme8s7sq_7Q&s";
const mentimeter_ui =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2gc5BZJ7bOSvxBG5Pm3bsi_tOiby_1Diblw&s";
const classFlow_ic =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFs2fH0d_h3STXdU6Ufya5Gu2ET-FAAgWUw&s";
const classFlow_ui =
  "https://lh4.googleusercontent.com/proxy/rp2UQ0y-iXVQMJr_b0pl5Ldm_HqfNJicalEs3qqu4J3XXEcZDDKt05yp9jjLwuy6zlu8QoLr8ZJP_aEx5OQJKrNmIYn7c75L8Z8Qn8GrLh1Ej9t1EMRZr6lyLYiR5UTjEfChSQqcPWXJhpKVg1G7tKMidMYo6yl9mw";

class ResourceUI extends React.Component {
  render() {
    return (
      <>
        
          <div className="infographic-container material" >
            <div
              className="boomer-title-wrapper"
              style={{ marginBottom: "30px" }}
            >
              <h2 className="infographic-title">Giới thiệu công cụ</h2>
            </div>
            {/* Nhu cầu về thể chất */}
            <section className="infographic-section physical">
              <h3>CHỈNH SỬA VIDEO</h3>
              <hr></hr>
              <h3>CAPCUT</h3>
              <div className="grid-template library">
                <img loading="lazy"
                  src={capcut_ic}
                  alt="capcut"
                  width="200px"
                  height="200px"
                />
                <img loading="lazy"
                  src={capcut_ui}
                  alt="capcut"
                  width="300px"
                  height="300px"
                />
              </div>
              <ul style={{ marginTop: "30px" }}>
                <li>
                  Đặc điểm: Ứng dụng di động và PC, phổ biến trên TikTok, giao
                  diện thân thiện.
                </li>
                <li>
                  Ưu điểm: Miễn phí, nhiều mẫu và hiệu ứng sẵn có, dễ dàng chỉnh
                  sửa nhanh.{" "}
                </li>
                <li>
                  Nhược điểm: Tính năng nâng cao cần trả phí, hạn chế cho dự án
                  chuyên nghiệp.{" "}
                </li>
              </ul>
              <hr></hr>
              <h3>IMOVIE</h3>
              <div className="grid-template library">
                <img loading="lazy"
                  src={imovie_ic}
                  alt="capcut"
                  width="200px"
                  height="200px"
                />
                <img loading="lazy"
                  src={imovie_ui}
                  alt="capcut"
                  width="300px"
                  height="300px"
                />
              </div>
              <ul style={{ marginTop: "30px" }}>
                <li>
                  Đặc điểm: Miễn phí trên macOS và iOS, thiết kế đơn giản cho
                  người mới.{" "}
                </li>
                <li>
                  Ưu điểm: Dễ sử dụng, tích hợp với hệ sinh thái Apple, hiệu ứng
                  cơ bản tốt.{" "}
                </li>
                <li>
                  Nhược điểm: Giới hạn tính năng nâng cao, không phù hợp cho dự
                  án phức tạp.{" "}
                </li>
              </ul>
            </section>

            <section className="infographic-section emotional">
              <div className="section-img-group"></div>
              <h3>TẠO TRANG WEB</h3>
              <hr></hr>
              <h3>WIX</h3>
              <div className="grid-template library">
                <img loading="lazy" src={wix_ic} alt="capcut" width="300px" height="300px" />
                <img loading="lazy" src={wix_ui} alt="capcut" width="300px" height="300px" />
              </div>
              <ul style={{ marginTop: "30px" }}>
                <li>
                  Đặc điểm: Nền tảng kéo thả trực quan, hơn 500 mẫu thiết kế tùy
                  chỉnh, tích hợp AI (Wix ADI) để tạo web tự động.{" "}
                </li>
                <li>
                  Ưu điểm: Dễ sử dụng, phù hợp cho người mới, hỗ trợ thương mại
                  điện tử, SEO, và tích hợp Google Analytics.{" "}
                </li>
                <li>
                  Nhược điểm: Bản miễn phí có quảng cáo Wix nổi bật, cần nâng
                  cấp để xóa.{" "}
                </li>
              </ul>
              <hr></hr>
              <h3>CANVA BUILDER</h3>
              <div style={{ justifyContent: "center", display: "center" }}>
                <img loading="lazy"
                  src={canvabuilder}
                  alt="capcut"
                  width="300px"
                  height="300px"
                />
              </div>
              <ul style={{ marginTop: "30px" }}>
                <li>
                  Đặc điểm: Ứng dụng di động và PC, phổ biến trên TikTok, giao
                  diện thân thiện.
                </li>
                <li>
                  Ưu điểm: Miễn phí, nhiều mẫu và hiệu ứng sẵn có, dễ dàng chỉnh
                  sửa nhanh.{" "}
                </li>
                <li>
                  Nhược điểm: Tính năng nâng cao cần trả phí, hạn chế cho dự án
                  chuyên nghiệp.{" "}
                </li>
              </ul>
            </section>
            <section className="infographic-section social"> 
                <h3>QUẢN LÝ GHI CHÚ VÀ LẬP KẾ HOẠCH HỌC TẬP</h3>
              <hr></hr>
              <h3>NOTION</h3>
              <div className="grid-template library">
                <img loading="lazy"
                  src={notion_ic}
                  alt="capcut"
                  width="200px"
                  height="200px"
                />
                <img loading="lazy"
                  src={notion_ui}
                  alt="capcut"
                  width="300px"
                  height="300px"
                />
              </div>
              <ul style={{ marginTop: "30px" }}>
                <li>
                  Đặc điểm: Công cụ tổ chức ghi chú, lịch học, và quản lý dự án.  

                </li>
                <li>
                  Ưu điểm: Tùy chỉnh linh hoạt, tích hợp bảng, lịch, miễn phí cho cá nhân.  
                </li>
                <li>
                  Nhược điểm: Đường cong học tập cao, có thể quá phức tạp cho nhu cầu cơ bản.  
                </li>
              </ul>
              <hr></hr>
              <h3>TODOIST</h3>
              <div className="grid-template library">
                <img loading="lazy"
                  src={todoist_ic}
                  alt="capcut"
                  width="200px"
                  height="200px"
                />
                <img loading="lazy"
                  src={todoist_ui}
                  alt="capcut"
                  width="300px"
                  height="300px"
                />
              </div>
              <ul style={{ marginTop: "30px" }}>
                <li>
                 Đặc điểm: Quản lý công việc, lập kế hoạch học tập với danh sách nhiệm vụ.
                </li>
                <li>
                   Ưu điểm: Giao diện tối giản, tích hợp lịch, nhắc nhở hiệu quả.  
                </li>
                <li>
                  Nhược điểm: Tính năng nâng cao cần trả phí, không mạnh về ghi chú dài.

                </li>
              </ul>



            </section>
            <section className="infographic-section entertainment">
            <h3>BÀI GIẢNG TƯƠNG TÁC</h3>
              <hr></hr>
              <h3>MENTIMETER</h3>
              <div className="grid-template library">
                <img loading="lazy"
                  src={mentimeter_ic}
                  alt="capcut"
                  width="200px"
                  height="200px"
                />
                <img loading="lazy"
                  src={mentimeter_ui}
                  alt="capcut"
                  width="300px"
                  height="300px"
                />
              </div>
              <ul style={{ marginTop: "30px" }}>
                <li>
                 Đặc điểm: Slide tương tác với trắc nghiệm, word cloud, khảo sát, tích hợp Zoom/PowerPoint. 
                </li>
                <li>
                 Ưu điểm: Dễ dùng, tăng tương tác, phản hồi thời gian thực. 
                </li>
                <li>
                  Nhược điểm: Miễn phí giới hạn số câu hỏi, không phù hợp bài giảng dài.
                </li>
              </ul>
              <hr></hr>
              <h3>CLASSFLOW</h3>
              <div className="grid-template library">
                <img loading="lazy"
                  src={classFlow_ic}
                  alt="capcut"
                  width="200px"
                  height="200px"
                />
                <img loading="lazy"
                  src={classFlow_ui}
                  alt="capcut"
                  width="300px"
                  height="300px"
                />
              </div>
              <ul style={{ marginTop: "30px" }}>
                <li>
                  Đặc điểm: Tạo bài giảng với câu đố, trò chơi nhóm, hỗ trợ đa nền tảng.  

                </li>
                <li>
                Ưu điểm: Miễn phí, tích hợp đa phương tiện, quản lý lớp học dễ dàng.  

                </li>
                <li>
                Nhược điểm: Giao diện phức tạp, cần thời gian làm quen.

                </li>
              </ul>
            </section>
          </div>
        
      </>
    );
  }
}

export default ResourceUI;
