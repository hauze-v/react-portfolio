// Stying and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeAnim } from "../animation";
// Routing
import { useHistory } from "react-router-dom";

const ProjectDetail = ({ projectDetail, pathID }) => {
  // Grab history
  const history = useHistory();

  // Exit Detail Handler (closes popup and re-enable scrolling on Home page)
  const exitDetailHandler = (e) => {
    // e.target grabs whatever the user clicked on
    const element = e.target;
    // If the user clicked on card shadow element...
    if (element.classList.contains("shadow")) {
      // Enable scrolling and close the window using history.push (it's kind of like Link)
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  // Add a layoutId to component for AnimateSharedLayout animations
  return (
    <CardShadow className="shadow" onClick={exitDetailHandler}>
      <ProjectDetails
        variants={fadeAnim}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <Header>
          <motion.h2>{projectDetail.name}</motion.h2>
        </Header>
        <BGImage>
          <a href={projectDetail.webLink}>
            <motion.img
              src={projectDetail.bgImage}
              alt="Main screen of project"
            />
          </a>
        </BGImage>
        <CaseStudy>
          <p>{projectDetail.caseStudy}</p>
          <Buttons>
            <a className="my-button" href={projectDetail.webLink}>
              Visit Website
            </a>
            <a
              className="my-button see-code-button"
              href={projectDetail.githubLink}
            >
              See the code
            </a>
          </Buttons>
          <p>{projectDetail.logic}</p>
        </CaseStudy>

        <ScreenshotGallery>
          {projectDetail.screenshots.map((screenshot) => (
            <a href={projectDetail.webLink}>
              <img src={screenshot} alt="Screenshot of project"></img>
            </a>
          ))}
        </ScreenshotGallery>
      </ProjectDetails>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  z-index: 999;
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
  padding: 2rem 8rem;
  background-color: #e3e3e3;
  position: absolute;
  left: 10%;
  color: #767779;
  img {
    width: 100%;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
  }

  /* Mobile Styles */
  @media (max-width: 415px) {
    padding: 1rem 1rem;
    img {
      min-height: 30vh;
      object-fit: cover;
      margin-bottom: 0.5rem;
    }
  }
`;

const Header = styled(motion.div)`
  h2 {
    padding: 1rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: #738182;
    letter-spacing: 1px;
  }

  /* Mobile Styles */
  @media (max-width: 415px) {
    h2 {
      padding: 1rem 0;
      font-size: 1.3rem;
      text-align: center;
      letter-spacing: 0px;
    }
  }
`;

const BGImage = styled(motion.div)`
  margin: 1rem 0;
`;

const CaseStudy = styled(motion.div)`
  width: 80%;
  margin: 0 auto;
  p {
    color: #738182;
    font-family: "Maven pro", sans-serif;
    font-weight: 500;
    font-size: 1.25rem;
    margin: 2rem 0;
    line-height: 1.5;
  }

  /* Mobile Styles */
  @media (max-width: 415px) {
    width: 100%;
    p {
      font-size: 1rem;
      line-height: 1.8;
    }
  }
`;

const Buttons = styled(motion.div)`
  text-align: center;
  margin: 3rem;
  a,
  a:link,
  a:active {
    color: rgba(255, 103, 68, 0.91);
    border: 2px solid rgba(255, 103, 68, 0.91) !important;
    background-color: #e3e3e3;
    font-size: 1rem;
  }
  a:hover,
  a:focus {
    background-color: rgba(255, 103, 68, 0.91) !important;
    color: #fff;
  }
  .see-code-button {
    margin-left: 1rem;
  }

  /* Mobile Styles */
  @media (max-width: 415px) {
    margin: 0;
    a,
    a:link,
    a:active {
      display: block;
      margin: 0 auto;
      font-size: 0.8rem;
      width: 75%;
      margin-bottom: 1rem;
    }
    .see-code-button {
      margin-left: 0;
    }
  }
`;

const ScreenshotGallery = styled(motion.div)`
  img {
    margin-top: 1rem;
    margin-bottom: 3rem;
  }

  /* Mobile Styles */
  @media (max-width: 415px) {
    img {
      margin-bottom: 0.5rem;
    }
  }
`;

export default ProjectDetail;
