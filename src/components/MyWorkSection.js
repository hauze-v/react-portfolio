// Import Componenets
import Project from "../components/Project";
// Stying and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const MyWorkSection = ({ projects }) => {
  return (
    <WorkSection>
      <Header>
        <h2>My Work</h2>
        <p>Here are some of my recent projects</p>
      </Header>
      <Projects>
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </Projects>
    </WorkSection>
  );
};

const WorkSection = styled(motion.div)`
  padding: 6em 4em 3em;
  background-color: #fff;
`;

const Header = styled(motion.div)`
  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
    color: #ff6945;
  }
  p {
    text-align: center;
    margin-bottom: 3rem;
    color: #767779;
    font-size: 1.4em;
    margin-bottom: 4em;
    font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
  }
`;

const Projects = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  h2 {
    padding: 2rem 0rem;
  }
`;

export default MyWorkSection;
