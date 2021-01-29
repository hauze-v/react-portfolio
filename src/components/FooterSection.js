// Styles and motion
import styled from "styled-components";
import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <Footer>
      <div class="row text-center">
        <div class="small-12 medium-6 medium-offset-3 columns">
          <a href="https://hyperstylescript.com">
            <p id="logo">AH</p>
          </a>

          <p id="copyright">Copyright &copy; 2020 | Adam Hauze</p>
        </div>
      </div>
    </Footer>
  );
};

const Footer = styled(motion.footer)`
  padding: 5em 4em 2em;
  text-align: center;
  #logo {
    background-color: rgba(255, 103, 68, 0.91);
    border-radius: 50%;
    color: #fff;
    padding: 0.4em;
    font-family: "Maven pro", sans-serif;
    font-size: 1.6em;
    font-weight: 500;
    display: inline;
  }
  #logo:hover {
    opacity: 0.8;
  }
  #copyright {
    margin-top: 1.6em;
    font-family: "Maven pro", sans-serif;
    font-weight: 500;
    color: #7d7d7d;
    margin-bottom: 2rem;
  }
`;

export default FooterSection;
