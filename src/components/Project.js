// Stying and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Routing
import { Link } from "react-router-dom";

const Project = ({ project, setProjectDetail }) => {
  const loadDetailHandler = () => {
    // Stop the scrolling behind the card shadow
    document.body.style.overflow = "hidden";
    setProjectDetail(project);
  };

  // Add a layoutId to component for AnimateSharedLayout animations
  return (
    <StyledProject layoutId={project.id} onClick={loadDetailHandler}>
      <Link to={`/project/${project.id}`}>
        <motion.h2 layoutId={`name ${project.id}`}>{project.name}</motion.h2>
        <motion.img
          layoutId={`image ${project.id}`}
          src={project.bgImage}
          alt="Main screenshot for project work."
        />
      </Link>
    </StyledProject>
  );
};

const StyledProject = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
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
