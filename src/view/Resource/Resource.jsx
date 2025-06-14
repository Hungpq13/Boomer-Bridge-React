import React from "react";
import ImgBanner from "../../images/resource-banner.jpg";
import ResourceUI from "./ResourceUI";
class Resource extends React.Component {
  render() {
    return (
      <div id="section-Resource">
        <div className="container">
          <div className="boomer-banner-wrapper">
            <img
              src={ImgBanner}
              alt="Baby Boomer Banner"
              className="boomer-banner-img"
            />
          </div>
        </div>

        <ResourceUI />
        <div className="container">
          <h1>Tài liệu tham khảo</h1>
          <div className="Reference">
            <ul >
              <li>
                Bristow, J. (2016).{" "}
                <i>
                  Quá trình hình thành 'Boomergeddon': Xây dựng thế hệ Baby
                  Boomer như một vấn đề xã hội ở Anh
                </i>
                . <i>Tạp chí Xã hội học Anh</i>.
                <a
                  href="https://doi.org/10.1111/1468-4446.12206"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://doi.org/10.1111/1468-4446.12206
                </a>
              </li>

              <li>
                Bump, P. (2023). <i>Baby boomer</i> [online]. Britannica.
                <a
                  href="https://www.britannica.com/topic/baby-boomers"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.britannica.com/topic/baby-boomers
                </a>
              </li>

              <li>
                Coates, T. (2024). The meaning of work for Generation Y and Baby
                Boomer individuals during the pandemic: A hermeneutic
                phenomenological study.
                <i>The Qualitative Report, 29</i>(7), 2039–2066.
                <a
                  href="https://doi.org/10.46743/2160-3715/2024.6835"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://doi.org/10.46743/2160-3715/2024.6835
                </a>
              </li>

              <li>
                Cox, C. B., Young, F. K., Guardia, A. B., & Bohmann, A. K.
                (2018). The Baby Boomer bias: The negative impact of
                generational labels on older workers.
                <i>Journal of Applied Social Psychology, 48</i>(2), 71–79.
              </li>

              <li>
                Hanna, J., & Oikarinen, E. (2023). Social media, wearables,
                telemedicine and digital health: A Gen Y and Z perspective. In{" "}
                <i>Comprehensive Precision Medicine</i>.
                <a
                  href="https://doi.org/10.1016/B978-0-12-824010-6.00072-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://doi.org/10.1016/B978-0-12-824010-6.00072-1
                </a>
              </li>

              <li>
                Knickman, J. R., & Snell, E. K. (2003). The 2030 problem: Caring
                for aging baby boomers.
                <a
                  href="https://doi.org/10.1034/j.1600-0560.2002.56.x"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://doi.org/10.1034/j.1600-0560.2002.56.x
                </a>
              </li>

              <li>
                Okere, V. O., & Maloney, P. J. (2008). The impact of Baby Boomer
                generation on socially responsible investing.
                <i>International Journal of Business Strategy, 8</i>(2), 72–81.
              </li>

              <li>
                Slagsvold, B., & Hansen, T. (2021). The Baby‑boomer generation.
                In{" "}
                <i>
                  Generational tensions and solidarity within advanced welfare
                  states
                </i>{" "}
                (pp. 153–172). Routledge.
                <a
                  href="https://doi.org/10.4324/9781003129592-12"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://doi.org/10.4324/9781003129592-12
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Resource;
