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

      <div style={{padding: '100px 0 64px 0'}}>
        <div className="margin-page display-flex">
          <p className="enterprise-name">G</p>
          <p className="enterprise-name">U</p>
          <p className="enterprise-name">S</p>
          <p className="enterprise-name">T</p>
          <p className="enterprise-name">A</p>
          <p className="enterprise-name">V</p>
          <p className="enterprise-name">O</p>
        </div>
        <div className="margin-page display-flex">
          <p className="enterprise-name second-name">A</p>
          <p className="enterprise-name second-name">N</p>
          <p className="enterprise-name second-name">D</p>
          <p className="enterprise-name second-name">R</p>
          <p className="enterprise-name second-name">A</p>
          <p className="enterprise-name second-name">D</p>
          <p className="enterprise-name second-name">E</p>
        </div>
      </div>

      {selectedProject}
      <div className="list-all-projects margin-page">
        <div className="row-projects">
          {projects.map((project, index) =>
            <div key={index} className={selectedProject === index ? 'selected' : ''}>
              <div className="project-card" style={{animationDelay: `0.${index}s`}}>
                {selectedProject === index ? <ProjectPage project={project} setSelectedProject={setSelectedProject} /> :
                  <>
                    <img src={project.image} onClick={() => setSelectedProject(index)}/>
                    <p className="project-title">{project.title}</p>
                  </>
                }
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;