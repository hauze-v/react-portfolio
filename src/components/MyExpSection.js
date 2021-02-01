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
      <ExpContainer>
        <ExpTopic>
          <div className="topic-header">
            <FaLaptop
              color="rgb(255, 138, 89)"
              fontSize="4em"
              className="icons"
            />
            <h3>Front-end</h3>
          </div>
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
        </ExpTopic>
        <ExpTopic>
          <div className="topic-header">
            <AiOutlineDatabase
              color="rgb(255, 138, 89)"
              fontSize="4em"
              className="icons"
            />
            <h3>Back-end</h3>
          </div>
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
        </ExpTopic>
        <ExpTopic>
          <div className="topic-header">
            <FaStar
              color="rgb(255, 138, 89)"
              fontSize="4em"
              className="icons"
            />
            <h3 id="tools">Tools</h3>
          </div>
          <ul>
            <li>Vim</li>
            <li>GitHub</li>
            <li>Git & Subversion</li>
            <li>Command Line Interfaces</li>
            <li>VS Code</li>
            <li>SSH</li>
          </ul>
        </ExpTopic>
      </ExpContainer>
    </Experience>
  );
};

const Experience = styled(motion.div)`
  background-color: #4c6d86;
  padding: 6em 4em 5.6em;
  h2 {
    color: #fff;
    text-align: center;
    margin-bottom: 5rem;
    font-size: 2.5rem;
    margin-top: 0;
  }
  h3 {
    color: #fff;
  }
  i {
    color: rgb(255, 138, 89);
  }

  /* Mobile Styles */
  @media (max-width: 415px) {
    padding: 3rem 2rem 1.5rem;
    h2 {
      font-size: 2rem;
      margin-bottom: 4rem;
    }
  }
`;

const ExpContainer = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin: 0 auto;
  margin-top: 3rem;
  width: 50%;

  /* Mobile Styles */
  @media (max-width: 415px) {
    display: initial;
  }
`;

const ExpTopic = styled(motion.div)`
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

  /* Mobile Styles */
  @media (max-width: 415px) {
    .topic-header {
      display: flex;
      align-items: center;
    }
    .icons {
      margin-bottom: 0.5rem;
      font-size: 3rem;
      margin-left: 2rem;
    }
    h3 {
      margin-left: 1rem;
    }
    #tools {
      margin-left: 2.5rem;
    }
    margin-bottom: 3rem;
  }
`;

export default MyExpSection;
