import { DATA_EXPERIENCE } from "./experince.const";
import rocket from "../../../assets/images/rocket.png";

import "./experience.scss";

const Experience = () => {
  return (
    <div className="Experience">
      <div className="Experience-title" data-aos="fade-up" aos-duration="2000">My experiences</div>

      <div className="Experience-contentContainer">
        <div className="Experience-rocket" data-aos="fade-up" aos-duration="2500">
          <img src={rocket} alt="" />
        </div>

       <div className="Experince-box">
            {DATA_EXPERIENCE.map((item, idx) => (
              <div key={idx} className="Experince-contentTextContainer">
                <div className="Experience-item" data-aos="fade-up" data-aos-delay="500" aos-duration="2000">
                  <div className="Experience-itemTitle">{item.position}</div>
                  <div className="Experience-itemPlace">at <a href={item.link} target="_blank">{item.place}.</a></div>
                  <div className="Experince-itemDate">({item.date})</div>
                </div>
              </div>
            ))}
       </div>
      </div>
    </div>
  );
};

export default Experience;
