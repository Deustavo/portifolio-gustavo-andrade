import React, { useState } from 'react';

import Solidty from '../Solidty';
import Skillus from '../Skillus';
import LifeGuard from '../LifeGuard';
import DanielAraujo from '../DanielAraujo';

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
            <p className="button-text" onClick={() =>{ setClose(true), setTimeout(() => closeProductPage(), 300)}} style={{ fontSize: 36, margin: '-12px 16px 0 0' }}>&larr;</p>
            <h1>{project.title}</h1>
          </div>

          {
            project.title === "Solidty Bank" ? <Solidty />
            : project.title === "Skillus" ? <Skillus />
            : project.title === "Life Guard" ? <LifeGuard />
            : project.title === "Daniel Araujo Advocacia" ? <DanielAraujo />
            : null
          }

        </div>
      </div>
  );
}

export default ProjectPage;