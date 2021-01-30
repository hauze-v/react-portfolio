import { FaLaptop, FaStar } from "react-icons/fa";
import { AiOutlineDatabase } from "react-icons/ai";
// Styles & Motion
import styled from "styled-components";
import { motion } from "framer-motion";

const MyExpSection = () => {
  return (
    <Experience>
      <div className="exp-title">
        <h2>My Experience</h2>
      </div>
      <div className="exp-total">
        <ExpTopics>
          <FaLaptop
            color="rgb(255, 138, 89)"
            fontSize="4em"
            className="icons"
          />
          <h3>Front-end</h3>
          <ul>
            <li>HTML(5)</li>
            <li>CSS(3)</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Sass</li>
            <li>Revealing Module Pattern</li>
            <li>Wordpress</li>
            <li>Joomla</li>
            <li>Shopify</li>
          </ul>
        </ExpTopics>
        <ExpTopics>
          <AiOutlineDatabase
            color="rgb(255, 138, 89)"
            fontSize="4em"
            className="icons"
          />
          <h3>Back-end</h3>
          <ul>
            <li>Node.js</li>
            <li>NPM</li>
            <li>Express</li>
            <li>SQL</li>
            <li>API Integration</li>
            <li>Security Headers</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Google Cloud Platform</li>
            <li>Linux</li>
            <li>Apache</li>
            <li>XAMPP</li>
          </ul>
        </ExpTopics>
        <ExpTopics>
          <FaStar color="rgb(255, 138, 89)" fontSize="4em" className="icons" />
          <h3>Tools</h3>
          <ul>
            <li>Vim</li>
            <li>GitHub</li>
            <li>Git & Subversion</li>
            <li>Command Line Interfaces</li>
            <li>VS Code</li>
            <li>SSH</li>
          </ul>
        </ExpTopics>
      </div>
    </Experience>
  );
};

const Experience = styled(motion.div)`
  background-color: #4c6d86;
  padding: 6em 4em 5.6em;
  h2 {
    color: #fff;
    margin-bottom: 0.7em;
  }
  h3 {
    color: #fff;
  }
  i {
    color: rgb(255, 138, 89);
    font-size: 4em;
  }
  .exp-title {
    text-align: center;
    margin-bottom: 5rem;
    font-size: 1.75rem;
    margin-top: 0;
  }
  .exp-total {
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
    width: 50%;
  }
`;

const ExpTopics = styled(motion.div)`
  p {
    color: #acaeb2;
    font-family: "Maven pro", sans-serif;
  }
  h3 {
    font-size: 2rem;
    margin-bottom: 0.7rem;
  }
  ul {
    line-height: 1.5;
  }
  ul li {
    list-style: none;
    color: #bbd2ff;
    font-family: "Maven pro", sans-serif;
    font-weight: 500;
  }
  .icons {
    margin-bottom: 1.5rem;
  }
`;

export default MyExpSection;
