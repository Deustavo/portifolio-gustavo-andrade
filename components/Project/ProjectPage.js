import React, { useState } from 'react';

function ProjectPage({project, setSelectedProject}) {
  const [close, setClose] = useState(false);

  function closeProductPage() {
    setSelectedProject(false)
    document.getElementById('landing-content').style.display = "block"
  }

  return (
      <div className={`width-full ${close ? "close-animation" : ""}`} style={{ position: 'absolute'}}>
        <div className="container width-full ">
          <div className="display-flex align-items-center margin-page" style={{ marginTop: 24 }}>
            <p className="button-text" onClick={() =>{ setClose(true), setTimeout(() => closeProductPage(), 300)}} style={{ fontSize: 36, marginRight: 16 }}>&larr;</p>
            <h1>{project.title}</h1>
          </div>

          <p>aa</p>
        </div>
      </div>
  );
}

export default ProjectPage;