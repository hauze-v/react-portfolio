// React
import { useState } from "react";
// Stying and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Components
import ProjectDetail from "../components/ProjectDetail";

const Project = ({ project, projectDetail, setProjectDetail }) => {
  const loadDetailHandler = () => {
    setProjectDetail(project);
  };

  return (
    <StyledProject onClick={loadDetailHandler}>
      <h2>{project.name}</h2>
      <img src={project.bgImage} alt="Main screenshot for project work." />
    </StyledProject>
  );
};

const StyledProject = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    display: block;
  }
  h2 {
    color: #738182;
  }
  overflow: hidden;
`;

export default Project;
