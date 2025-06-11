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
              <p>
            The Editors of Encyclopaedia Britannica. (2025, May 12). Baby
            boomer. Britannica.{" "}
          </p>
          <p>
            ScienceDirect. (n.d.). Boomers. In ScienceDirect Topics.{" "}
            <a target="blank" href="https://www.sciencedirect.com/topics/social-sciences/boomers">
              {" "}
              https://www.sciencedirect.com/topics/social-sciences/boomers
            </a>
          </p>

          <p>
            Slagsvold, B., & Hansen, T. (2021). The Baby‑boomer generation
            (trong Generational Tensions and Solidarity Within Advanced Welfare
            States, tr. 153–172). Routledge.{" "}
            <a target="blank" href="https://doi.org/10.4324/9781003129592-12 ">
              {" "}
              https://doi.org/10.4324/9781003129592-12
            </a>
          </p>

          <p>
            {" "}
            Bristow, J. 2016. Quá trình hình thành 'Boomergeddon': Xây dựng thế
            hệ Baby Boomer như một vấn đề xã hội ở Anh. Tạp chí Xã hội học Anh.{" "}
            <br />
            <a target="blank" href="https://doi.org/10.1111/1468-4446.12206 ">
              https://doi.org/10.1111/1468-4446.12206{" "}
            </a>
          </p>

          <p>
            {" "}
            Cox, C. B., Young, F. K., Guardia, A. B., & Bohmann, A. K. (2018).
            The Baby Boomer bias: The negative impact of generational labels on
            older workers. Journal of Applied Social Psychology, 48(2), 71–79.
          </p>
          <p>
            Okere, V. O., & Maloney, P. J. (2008). The Impact of Baby Boomer
            Generation on Socially Responsible Investing. International Journal
            of Business Strategy, 8(2), 72–81.
          </p>
          <p>
            James R. Knickman, Emily K. Snell. (2003). The 2030 Problem: Caring
            for Aging Baby Boomers.{" "}
            <a target="blank" href="https://doi.org/10.1034/j.1600-0560.2002.56.x">
              https://doi.org/10.1034/j.1600-0560.2002.56.x
            </a>
          </p>

          <p>
            Coates, T. (2024). The Meaning of Work for Generation Y and Baby
            Boomer Individuals During the Pandemic: A Hermeneutic
            Phenomenological Study. The Qualitative Report, 29(7), 2039-2066.{" "}
            <a target="blank" href="  https://doi.org/10.46743/2160-3715/2024.6835 ">
              {" "}
              https://doi.org/10.46743/2160-3715/2024.6835 */
            </a>
          </p>
          </div>
        
        </div>
      </div>
    );
  }
}

export default Resource;
