import styled from "styled-components";
import { motion } from "framer-motion";
// Images
import portrait from "../img/Adam.jpg";
// Typist
import Typist from "react-typist";

const AboutSection = () => {
  const highlight = () => {
    document.getElementById("last-line").classList.add("highlight");
  };

  return (
    <About>
      <div>
        <img className="img-circle" src={portrait} alt="headshot"></img>
        <TypedDetails>
          <h2>
            Hi, I'm Adam and I...<br></br>
            <Typist
              avgTypingDelay={40}
              className={`writing-text`}
              onTypingDone={highlight}
            >
              <span>am a front end web developer.</span>
              <Typist.Backspace count={29} delay={500} />
              <span>love learning new things.</span>
              <Typist.Backspace count={25} delay={500} />
              <span>share knowledge each week on my blog.</span>
              <Typist.Backspace count={37} delay={500} />
              <span id="last-line">am passionate about code.</span>
            </Typist>
          </h2>
        </TypedDetails>
      </div>
      <CTA>
        <a
          className="my-button cta-button expand form-button"
          href="mailto:hauze_v@protonmail.com"
        >
          Get In Touch
        </a>
      </CTA>
      <Social>
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
      </Social>
    </About>
  );
};

const About = styled(motion.div)`
  margin-top: 10em;
  border: 1px solid #eee;
  background-color: white;
  padding-bottom: 1em;
  text-align: center;
  img {
    max-width: 15em;
    position: relative;
    bottom: 7.5em;
  }
  .img-circle {
    border-radius: 50%;
  }

  /* Mobile Styles */
  @media (max-width: 400px) {
    img {
      width: 13rem;
    }
  }
`;

const TypedDetails = styled(motion.div)`
  margin-top: -2em;
  h2 {
    color: #646464;
    font-size: 3.8em;
    padding-bottom: 1em;
  }
  span {
    font-weight: 300;
    font-size: 0.7em;
  }
  .writing-text {
    margin: 0.75rem 0;
  }
  .highlight {
    color: #fff;
    background-color: #c8412b;
  }

  /* Mobile styles */
  @media (max-width: 400px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

const CTA = styled(motion.div)`
  .cta-button {
    color: #cc4b37;
    text-transform: uppercase;
    border: 2px solid rgba(255, 103, 68, 0.91);
    border-radius: 50px;
    background: white;
  }
  .cta-button:hover,
  .cta-button:focus {
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 14px 1px rgba(0, 0, 0, 0.15);
    background-color: rgba(255, 103, 68, 0.91);
    color: white;
  }
`;

const Social = styled(motion.div)`
  i {
    margin-top: 2rem;
    width: 3rem;
  }
  .fa {
    font-size: 1.5rem;
    padding: 0.1rem 0.4rem;
    color: #8a8a8a;
  }
  .fa:hover {
    cursor: pointer;
  }
`;

export default AboutSection;
