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
        <p>Here are a few of my recent projects</p>
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
  border: 2px solid blue;
  padding: 0rem 5rem;
`;

const Header = styled(motion.div)`
  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
  p {
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const Projects = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  h2 {
    padding: 2rem 0rem;
  }
`;

export default MyWorkSection;
