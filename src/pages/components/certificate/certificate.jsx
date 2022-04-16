import { useEffect } from "react";
import AOS from "aos";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import CardComponent from "../../../global/components/card/card";
import { DATA_CERTIFICATE } from "./certificate.const";
import "./certificate.scss";
import random from "../../../assets/images/random2.png";

const OPTIONS = {
  rewind: true,
  perPage: 1,
  gap: "10px",
  arrows: "slider",
  pagination: false,
};

const Certificate = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="Certificate">
      <div className="Certificate-title" data-aos="fade-up" aos-duration="2000">
        Some my certificate
      </div>

      <div className="Certificate--flex" data-aos="fade-up" aos-duration="2000">
        <Splide options={OPTIONS}>
          {DATA_CERTIFICATE.map((item) => (
            <SplideSlide key={item.id}>
              <CardComponent foto={item.img} />
            </SplideSlide>
          ))}
        </Splide>
        <img
          src={random}
          alt=""
          className="Random-img"
          data-aos="zoom-in-up"
          aos-duration="2000"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Certificate;
