// Stying and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Project = ({ project }) => {
  return (
    <div className="Project">
      <h2>{project.name}</h2>
      <img src={project.bgImage} alt="Main screenshot for project work." />
    </div>
  );
};

export default Project;
