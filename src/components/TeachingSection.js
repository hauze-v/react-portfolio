import { motion } from "framer-motion";
import styled from "styled-components";
import ReactWordcloud from "react-wordcloud";

const TeachingSection = () => {
  // Word cloud words
  const words = [
    {
      text: "VS Code",
      value: 45,
    },
    {
      text: "Terminal",
      value: 50,
    },
    {
      text: "Git",
      value: 70,
    },
    {
      text: "Adding favicons",
      value: 25,
    },
    {
      text: "HTML elements",
      value: 45,
    },
    {
      text: "JS definition vs. declaration",
      value: 30,
    },
    {
      text: "HTML attributes",
      value: 36,
    },
    {
      text: "Anatomy of HTML document",
      value: 57,
    },
    {
      text: "GitHub",
      value: 70,
    },
    {
      text: "CSS box model",
      value: 68,
    },
    {
      text: "Bash profile alias",
      value: 25,
    },
    {
      text: "CSS Rules",
      value: 32,
    },
    {
      text: "Developer Tools",
      value: 39,
    },
    {
      text: "Library vs. Framework",
      value: 55,
    },
    {
      text: "Iteration & Loops",
      value: 65,
    },
    {
      text: "CSS Selectors",
      value: 27,
    },
    {
      text: "Styling Images",
      value: 25,
    },
  ];

  const options = {
    colors: ["#90c5f0", "#3399dd", "#00ccff", "#90a0dd", "#2E8BC0"],
    enableTooltip: false,
    deterministic: false,
    fontFamily: "Helvetica",
    fontSizes: [20, 60],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 5,
    rotations: 0,
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000,
  };

  return (
    <Teaching>
      <h2 class="text-center">Teaching</h2>
      <div>
        <p>
          In July 2020, I built a{" "}
          <a href="https://hyperstylescript.com" id="wordpress-link">
            blog
          </a>{" "}
          where I've been learning and sharing in public every Friday. Since
          then, I've helped over 50 subscribers with topics on...
        </p>
      </div>
      <ReactWordcloud words={words} options={options} />
    </Teaching>
  );
};

const Teaching = styled(motion.div)`
  padding: 6em 4em 3em;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  display: block;
  background-color: #e3e3e3;
  h2 {
    color: #595959;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  p {
    color: #848282;
    font-size: 1.4rem;
    font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
    margin-bottom: 3rem;
    line-height: 1.6;
    text-rendering: optimizeLegibility;
  }
  a {
    color: rgba(255, 103, 68, 0.91);
    font-weight: bold;
  }
  a:hover {
    opacity: 0.8;
  }
  div {
    margin-bottom: 0.5rem;
  }
  .teaching-domains {
    height: 500px;
    width: auto;
    margin-top: -4rem;
  }
  #wordpress-link {
    color: rgba(255, 103, 68, 0.91);
  }
  #wordpress-link:hover {
    opacity: 0.8;
  }

  /* Mobile Styles */
  @media (max-width: 415px) {
    width: 95%;
    padding: 3rem 2rem 1.5rem;
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
    }
  }
`;

export default TeachingSection;
