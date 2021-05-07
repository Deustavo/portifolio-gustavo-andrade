import React, { useEffect, useState } from 'react';
import ProjectPage from '../components/Project/ProjectPage';
import { projects } from './api/projects';

function LandingPage() {
  const [hideHeader, setHideHeader] = useState(false);
  const [selectedProject, setSelectedProject] = useState(false);

  function animationHeader() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setHideHeader(false);
      } else {
        setHideHeader(true)
      }
      prevScrollpos = currentScrollPos;
    }
  }

  useEffect(() => {
    animationHeader();
  }, []);

  return (
    
    <div className={selectedProject !== false ? 'project-page': ''}>
      <div className="backgound-page">
        <div className="header margin-page" style={{ marginTop: hideHeader ? '-100px' : 0 }}>
          <p>Gustavo Andrade</p>
          <div className="display-flex">
            <a target="blank_" href="https://github.com/deustavo" style={{ marginRight: 16 }}>
              <p className="button-text">GITHUB</p>
            </a>
            <a target="blank_" href="https://www.linkedin.com/in/deustavo/">
              <p className="button-text">LINKEDIN</p>
            </a>
          </div>
        </div>


        <div style={{padding: '100px 0 100px 0'}}>
          {selectedProject === false ? '' : <ProjectPage project={selectedProject} setSelectedProject={setSelectedProject} />}

          <div className="margin-page display-flex">
            {['G', 'U', 'S', 'T', 'A', 'V', 'O'].map((letter, index) => <p className="enterprise-name" style={{animationDelay: `0.${index}s`}}>{letter}</p> )}
          </div>
          <div className="margin-page display-flex">
            {['A', 'N', 'D', 'R', 'A', 'D', 'E'].map((letter, index) => <p className="enterprise-name second-name" style={{animationDelay: `0.${index}s`}}>{letter}</p> )}
          </div>

          <div className="list-all-projects margin-page">
            <div className="row-projects">
              {projects.map((project, index) =>
                  <div key={index}div className="project-card" style={{animationDelay: `0.${index}s`}}>
                    <img src={project.image} onClick={() => setSelectedProject(project)}/>
                    <p className="project-title">{project.title}</p>
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;