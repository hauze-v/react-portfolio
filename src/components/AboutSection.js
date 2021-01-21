// Images
import portrait from "../img/Adam.jpg";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="row">
        <div className="small-12 large-8 large-offset-2 columns text-center">
          <img className="img-circle" src={portrait} alt="headshot"></img>
          <div className="details">
            <h2>
              Hi, I'm Adam and I...<br></br> <span id="writing-text"></span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="small-12 column">
          <div className="cta text-center">
            <a
              className="my-button cta-button expand form-button"
              href="mailto:hauze_v@protonmail.com"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="small-12 column">
          <div className="my-arrow-div text-center">
            <a href="https://github.com/hauze-v">
              <i className="fa fa-github-alt fa-2x"></i>
            </a>
            <a href="https://hyperstylescript.com">
              <i className="fa fa-desktop fa-2x"></i>
            </a>
            <a href="https://twitter.com/hyper_style_scp">
              <i className="fa fa-twitter fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
