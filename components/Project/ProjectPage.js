import React from 'react';

// import { Container } from './styles';

function ProjectPage({project, setSelectedProject}) {
  return (
      <div className="margin-page width-full">
          <div className="display-flex justfy-content-between align-items-center">
            <h1>{project.title}</h1>
            <p className="button-text" onClick={() => setSelectedProject(false)}>x</p>
          </div>
      </div>
  );
}

export default ProjectPage;