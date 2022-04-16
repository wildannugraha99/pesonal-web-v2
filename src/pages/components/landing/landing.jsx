import { useEffect } from "react";
import AOS from "aos";

import male1 from "../../../assets/images/male-1.png";
import down from "../../../assets/images/down.svg";
import random1 from "../../../assets/images/random.png";

import "./landing.scss";

const Landing = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="Landing">
      <div className="Landing-container">
        <img src={male1} alt="male" loading="lazy" />
        <div className="Landing-textContainer">
          <div
            className="Landing-text--md"
            data-aos="fade-right"
            aos-duration="1500"
          >
            Hai guys...
          </div>
          <div
            className="Landing-text--lg"
            data-aos="fade-left"
            data-aos-delay="400"
            aos-duration="1500"
          >
            My name is <span>Wildan</span>
          </div>
          <div
            className="Landing-text--sm"
            data-aos="fade-right"
            data-aos-delay="800"
            aos-duration="1500"
          >
            a man who really likes front-end development and UI design.
          </div>
        </div>

        <img
          src={random1}
          alt=""
          className="Landing-imgRandom"
          loading="lazy"
        />
      </div>

      <div className="Landing-arrowDown" id="MyBio">
        <div className="Landing-arrowDownText">know me better</div>
        <img
          src={down}
          alt=""
          className="Landing-arrowDownImg"
          loading="lazy"
        />
        <img
          src={down}
          alt=""
          className="Landing-arrowDownImg animate-1"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Landing;
