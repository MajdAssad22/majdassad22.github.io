import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div className="flex flex-col justify-center gap-5 px-10">
      {projects.map((project) => (
        <div className="p-5 rounded-2xl bg-white" key={project.id}>
          <strong>{project.name}</strong>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};
export default ProjectList;
