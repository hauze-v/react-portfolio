import { FaLaptop, FaStar } from "react-icons/fa";
import { AiOutlineDatabase } from "react-icons/ai";

const MyExpSection = () => {
  return (
    <section id="experience">
      <div className="exp-title">
        <h2>My Experience</h2>
      </div>
      <div className="exp-total">
        <div className="experience-topics">
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
            <li>JS Design Patterns (Revealing Module)</li>
            <li>Wordpress</li>
            <li>Joomla</li>
            <li>Shopify</li>
          </ul>
        </div>
        <div className="experience-topics">
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
            <li>Security implementations</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Google Cloud Platform</li>
            <li>Linux</li>
            <li>Apache</li>
            <li>XAMPP</li>
          </ul>
        </div>
        <div className="experience-topics">
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
        </div>
      </div>
    </section>
  );
};

export default MyExpSection;
