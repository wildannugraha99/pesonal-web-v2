import { useEffect } from "react";
import AOS from "aos";

import { SKILLS_DATA } from "./skills.const";
import "./skills.scss";

const Skills = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="Skills-logo">
      <div className="Skills-title" data-aos="fade-up" aos-duration="2000">
        My coding skills
      </div>
      <div className="Skills-logoWrapper">
        {SKILLS_DATA.map((item) => (
          <div data-aos="fade-up" aos-duration="3000" key={item.name}>
            <img
              src={item.logo}
              alt={item.name}
              title={item.name}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
