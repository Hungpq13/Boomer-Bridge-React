import React, { useEffect, useState } from "react";

const nav_menu = [
  { name: "TRANG CHỦ", link: "/" },
  {
    name: "VỀ CHÚNG TÔI",

    sub: [
      {
        name: "GIỚI THIỆU THÀNH VIÊN",
        link: "/ve-chung-toi/gioi-thieu-thanh-vien",
      },
      {
        name: "TRIẾT LÝ HỌC ĐẠI SỐ",
        link: "/ve-chung-toi/triet-ly-hoc-dai-so",
      },
    ],
  },
  {
    name: "SẢN PHẨM",
    
    sub: [
      { name: "VIDEO", link: "/san-pham/video" },
      { name: "BÀI THUYẾT TRÌNH CŨ", link: "/san-pham/bai-thuyet-trinh" },
      { name: "GAME", link: "/san-pham/game" },
      { name: "FEEDBACK", link: "/san-pham/feedback" },
    ],
  },
  { name: "LIÊN HỆ", link: "/lien-he" },
  { name: "TÀI NGUYÊN GIÁO DỤC", link: "/tai-nguyen" },
];

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Đóng dropdown khi click ngoài menu (mobile UX tốt hơn)
  React.useEffect(() => {
    const handleClick = () => setOpenDropdown(null);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const list_menu = nav_menu.map((item, idx) => {
    const isActiveParent =
      item.sub &&
      item.sub.some((subitem) => window.location.pathname === subitem.link);

    if (item.sub) {
      return (
        <div
          className={`dropdown${openDropdown === idx ? " active" : ""}`}
          key={item.name}
          onClick={(e) => {
            if (window.innerWidth <= 940) {
              e.stopPropagation();
              setOpenDropdown(openDropdown === idx ? null : idx);
            }
          }}
          onMouseEnter={() => window.innerWidth > 940 && setOpenDropdown(idx)}
          onMouseLeave={() => window.innerWidth > 940 && setOpenDropdown(null)}
        >
          <p
            className="dropdown-toggle"
            style={isActiveParent ? { textDecoration: "underline" } : {}}
          >
            {item.name}{" "}
            <i
              className="fa-solid fa-chevron-down arrow-up"
              style={{ marginLeft: "10px" }}
            ></i>
          </p>
          <div
            className="dropdown-menu"
            style={{
              display: openDropdown === idx ? "block" : "none",
            }}
          >
            {item.sub.map((subitem) => (
              <a
                href={subitem.link}
                key={subitem.name}
                style={
                  window.location.pathname === subitem.link
                    ? { textDecoration: "underline", fontWeight: "bold" }
                    : {}
                }
              >
                {subitem.name}
              </a>
            ))}
          </div>
        </div>
      );
    }
    // Không có sub
    return (
      <a
        href={item.link}
        key={item.name}
        style={
          window.location.pathname === item.link
            ? { textDecoration: "underline", fontWeight: "bold" }
            : {}
        }
      >
        {item.name}
      </a>
    );
  });

  function toggleMenu() { 
    const menu = document.querySelector(".menu");
    const main =
      document.querySelector("main") || document.querySelector(".container");
    menu.classList.toggle("active");
    window.scrollTo(0, 0);

    // Kiểm tra nếu chiều rộng nhỏ hơn 768px (thiết bị di động)
    const isMobile = window.innerWidth < 1025;

    if (menu.classList.contains("active")) {
      if (main && isMobile) main.style.marginTop = "1000px"; // Đẩy nội dung xuống
    } else {
      if (main) main.style.marginTop = ""; // Reset lại margin
    }
  }

  useEffect(() => {
    function handleScroll() {
      const menuToggle = document.querySelector(".menu-toggle");
      const menu = document.querySelector(".menu");
      if (window.scrollY > 100) {
        if (menuToggle) menuToggle.style.display = "block";
        if (menu) menu.style.display = "none";
      } else {
        if (menuToggle) menuToggle.style.display = "";
        if (menu) menu.style.display = "";
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="header">
      <div className="nav">
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <div className="menu hide">{list_menu}</div>
      </div>
    </div>
  );
}

export default Header;
