import React, { useEffect, useState } from 'react';

function ProjectPage({project, setSelectedProject}) {
  const [close, setClose] = useState(false);
  return (
      <div className={`width-full ${close ? "close-animation" : ""}`} style={{ position: 'absolute'}}>
        <div className="container width-full ">
          <div className="display-flex justfy-content-between align-items-center margin-page" style={{ marginTop: 24 }}>
            <h1>{project.title}</h1>
            <p className="button-text" onClick={() =>{ setClose(true), setTimeout(() => setSelectedProject(false), 600)}}>x</p>
          </div>

          <p>aa</p>
        </div>
      </div>
  );
}

export default ProjectPage;