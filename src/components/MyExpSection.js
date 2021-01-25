import { FaLaptop, FaDatabase, FaStar } from "react-icons/fa";

const MyExpSection = () => {
  return (
    <section id="experience">
      <div className="row column">
        <div className="small-12">
          <h2 className="text-center">My Experience</h2>
        </div>
      </div>
      <div className="row">
        <div className="small-12 medium-4 columns text-center experience-topics">
          <FaLaptop color="rgb(255, 138, 89)" fontSize="4em" />
          <h3>Front-end</h3>
          <ul>
            <li>HTML(5)</li>
            <li>CSS(3)</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>JS Design Patterns</li>
            <li>Wordpress</li>
          </ul>
        </div>
        <div className="small-12 medium-4 columns text-center experience-topics">
          <FaDatabase color="rgb(255, 138, 89)" fontSize="4em" />
          <h3>Back-end</h3>
          <ul>
            <li>Node.js</li>
            <li>npm</li>
            <li>express</li>
            <li>SQL</li>
            <li>Rest APIs</li>
            <li>MySQL DB</li>
          </ul>
        </div>
        <div className="small-12 medium-4 columns text-center experience-topics">
          <FaStar color="rgb(255, 138, 89)" fontSize="4em" />
          <h3>Tools</h3>
          <ul>
            <li>Vim</li>
            <li>GitHub</li>
            <li>Git & Subversion</li>
            <li>Command line interface</li>
            <li>VS Code</li>
            <li>Linux</li>
            <li>SSH</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MyExpSection;
