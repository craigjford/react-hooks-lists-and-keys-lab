import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log('in ProjectItem ', {name})
  console.log('in ProjectItem ', {about})
  console.log('in ProjectItem ', {technologies})

  const techList = technologies.map(tech => 
      <span>{tech}</span>
  );
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {techList}
      </div>
    </div>
  );
}

export default ProjectItem;
