import { Splide, SplideSlide } from "@splidejs/react-splide";
import CardComponent from "../../../global/components/card/card";
import { PROJECT_DATA } from "./projects.const";
import './projects.scss'

const Projects = () => {
  const OPTIONS = {
    rewind: true,
    perPage: 2,
    arrows: "slider",
    pagination: true,
  };

  return (
    <div className="Projects" id="MyProjects">
      <div className="Projects-title" data-aos="fade-up" aos-duration="2000">Some my mini projects</div>

      <div className="SplideBox" data-aos="fade-up" aos-duration="2000">
        <Splide options={OPTIONS} id="splider">
          {PROJECT_DATA.map((item,idx) => (
            <SplideSlide key={idx}>
              <CardComponent foto={item.img} title={item.name} desc={item.tech} link={item.link}/>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Projects;
