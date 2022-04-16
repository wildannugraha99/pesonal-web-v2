import ButtonNav from "../button-nav/button-nav";

import { useToogle } from "./navbar.hook";

import menu from "../../../assets/images/menu.svg";
import close from "../../../assets/images/close.svg";

import "./navbar.scss";

const Navbar = ({ scrollPosition, widthScreen }) => {
  const { onClickBtn, isShow } = useToogle();

  return (
    <div className={scrollPosition < 140 ? "Navbar" : "Navbar--bg"}>
      <div
        className={
          isShow ? "Navbar-btnContainer--show" : "Navbar-btnContainer--hide"
        }
      >
        <button className="Navbar-icon close" onClick={onClickBtn}>
          <img src={close} alt="" />
        </button>

        <div className="Navbar-buttonMenu">
          <div
            className="Navbar-btnContainer--mr"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <ButtonNav text="About me" scroll="MyBio" />
          </div>
          <div
            className="Navbar-btnContainer--mr"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <ButtonNav text="My projects" scroll="MyProjects" />
          </div>
          <div
            className="Navbar-btnContainer--mr"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <ButtonNav text="Send me email" scroll="MyEmail" />
          </div>
        </div>
      </div>
      <button className="Navbar-icon hamburger" onClick={onClickBtn}>
        <img src={menu} alt="" />
      </button>
    </div>
  );
};

export default Navbar;
