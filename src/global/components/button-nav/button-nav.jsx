import { Link} from 'react-scroll'

import { useScroll } from '../../services/useScroll.hook';

import './button-nav.scss'


const ButtonNav = ({ text, scroll}) => {

  const {scrollPosition} = useScroll()

  return (
    <div className="ButtonNav" >
      <div className="ButtonNav-container">
        <Link
          to={scroll}
          alt=""
          smooth={true}
          duration={1000}
        >
          <button className={scrollPosition <= 140 ? "ButtonNav-btn" : "ButtonNav-btnScroll"}>{text}</button>
        </Link>
      </div>
    </div>
  );
};

export default ButtonNav;
