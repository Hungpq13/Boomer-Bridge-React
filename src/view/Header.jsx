import  { useEffect } from "react";

const nav_menu = [
  { name: "TRANG CHỦ", link: "/" },
  { name: "VỀ CHÚNG TÔI", link: "/ve-chung-toi" },
  { name: "SẢN PHẨM", link: "/san-pham" },
  { name: "LIÊN HỆ", link: "/lien-he" },
  { name: "TÀI NGUYÊN GIÁO DỤC", link: "/tai-nguyen" },
];

const list_menu = nav_menu.map((item) => (
  <a
    href={item.link}
    key={item.name}
    style={
      window.location.pathname === item.link
        ? { textDecoration: "underline" }
        : {}
    }
  >
    {item.name}
  </a>
));

 
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


function Header() {
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
