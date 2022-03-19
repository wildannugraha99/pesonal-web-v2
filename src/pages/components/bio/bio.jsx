import wa from '../../../assets/images/whatsapp.png'
import linkedin from '../../../assets/images/linkedin.png'
import male2 from '../../../assets/images/male-2.png'
import "./bio.scss";

const Bio = () => {
  return (
    <div className="Biodata" data-aos="fade-up" data-aos-duration="1500">
     <div className="Biodata-content">
          <div className="Biodata-title">My short bio</div>
          <div className="Biodata-desc">
            My name is Muhamad Wildan Nugraha, usually called Wildan, 21 years old,
            I am a fresh graduate from the computer systems department at Gunadarma
            University. I am someone who has passion and enthusiasm for the world of
            programming and UI design in the field of front-end developer and UI/UX
            design. Therefore, to support my passion and enthusiasm for front-end
            developers and UI/UX design, I have sufficient understanding of using
            HTML, CSS, Javascript, React and also the Figma design application.
          </div>
          <a href="##"><img src={wa} alt="" className='Biodata-contactLogo'/></a>
          <a href="##"><img src={linkedin} alt="" className='Biodata-contactLogo'/></a>
     </div>
    
    <div className="Biodata-contentImg">
        <img src={male2} alt="" className='Biodata-contentImg--image'/>
    </div>

    </div>
  );
};

export default Bio;
