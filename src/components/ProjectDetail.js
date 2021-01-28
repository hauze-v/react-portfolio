// Stying and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectDetail = ({ projectDetail }) => {
  return (
    <div className="card-shadow">
      <div className="project-detail">
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
      </div>
    </div>
  );
};

export default ProjectDetail;
