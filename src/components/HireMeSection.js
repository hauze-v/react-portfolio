// Styles
import styled from "styled-components";
import { motion } from "framer-motion";

const HireMeSection = () => {
  return (
    <HireMe>
      <h2 class="text-center">Want to hire me?</h2>
      <p></p>
      <div class="small-12 medium-8 medium-offset-2 columns">
        <p class="text-center">I'm currently available for work.</p>
      </div>
      <div id="contactMeButton">
        <a class="my-button form-button" href="mailto:hauze_v@protonmail.com">
          Contact me now
        </a>
      </div>
    </HireMe>
  );
};

export default HireMeSection;

const HireMe = styled(motion.div)`
  background-color: rgba(255, 103, 68, 0.91);
  padding: 6em 4em 5.6em;
  text-align: center;
  h2 {
    color: white;
    font-size: 2.5rem;
    line-height: 1.4;
    margin-bottom: 0.5rem;
  }
  p {
    color: #fff;
    font-family: "Maven pro", sans-serif;
    font-weight: 500;
    font-size: 1.2em;
  }
  #contactMeButton {
    margin-top: 3rem;
  }
  a {
    border: 2px solid #fff;
    border-radius: 45px;
    color: #fff;
  }
  a:hover {
    background: #fff;
    color: rgba(255, 103, 68, 0.91);
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 14px 1px rgba(0, 0, 0, 0.15);
  }

  /* Mobile Styles */
  @media (max-width: 400px) {
    padding: 3rem 2rem 1.5rem;
    h2 {
      font-size: 2rem;
    }
    #contactMeButton {
      margin-bottom: 1rem;
    }
  }
`;
