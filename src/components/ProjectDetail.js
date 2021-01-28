// Stying and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectDetail = ({ projectDetail }) => {
  return (
    <CardShadow>
      <ProjectDetails>
        <div className="name">
          <h3>{projectDetail.name}</h3>
        </div>
        <div className="media">
          <img src={projectDetail.bgImage} alt="Main screen of project" />
        </div>
        <div className="case-study">
          <p>{projectDetail.caseStudy}</p>
        </div>
        <div className="screenshotGallery">
          {projectDetail.screenshots.map((screenshot) => (
            <img src={screenshot} alt="Screenshot of project"></img>
          ))}
        </div>
      </ProjectDetails>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff6945;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const ProjectDetails = styled(motion.div)`
  width: 80%;
  margin: 1rem 0;
  border-radius: 1rem;
  padding: 2rem 20rem;
  background-color: #e3e3e3;
  position: absolute;
  left: 10%;
  color: #767779;
  img {
    width: 100%;
    border-radius: 0.5rem;
  }
`;

export default ProjectDetail;
