// Import Componenets
import Project from "../components/Project";

const MyWorkSection = ({ projects }) => {
  // Convert projects to an array
  // const projectsArray = Object.keys(projects);

  return (
    <div className="work-section">
      <h2>My Work</h2>
      <p>Here are a few of my recent projects</p>
      <div className="projects">
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default MyWorkSection;
