import { SKILLS_DATA } from "./skills.const";
import "./skills.scss";

const Skills = () => {
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
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
