import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import ProjectPage from '../components/Project/ProjectPage';
import { projects } from './api/projects';

function LandingPage() {
  const [hideHeader, setHideHeader] = useState(false);
  const [selectedProject, setSelectedProject] = useState(false);

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function animationHeader() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setHideHeader(false);
        try { document.getElementById("header-projects").style.top = "82px" } catch { }
      } else {
        setHideHeader(true);
        try { document.getElementById("header-projects").style.top = "0px" } catch { }
      }
      prevScrollpos = currentScrollPos;
    }
  }

  useEffect(() => {
    animationHeader();
  }, []);

  return (
    
    <div className={selectedProject !== false ? 'project-page': ''}>
      <Head>
        <title>Gustavo Andrade's portfolio</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
      </Head>


      <div className="backgound-page">
        <div className="header margin-page" style={{ marginTop: hideHeader ? '-100px' : 0 }}>
          <p onClick={() => window.location.reload()} className="button-text">Gustavo Andrade</p>
          <div className="display-flex">
            <a target="blank_" href="https://github.com/deustavo" style={{ marginRight: 18 }}>
              <p className="button-text"><i className="fab fa-github"></i></p>
            </a>
            <a target="blank_" href="https://dribbble.com/Deustavo" style={{ marginRight: 18 }}>
              <p className="button-text"><i className="fab fa-dribbble"></i></p>
            </a>
            <a target="blank_" href="https://www.linkedin.com/in/deustavo/">
              <p className="button-text"><i className="fab fa-linkedin-in"></i></p>
            </a>
          </div>
        </div>


        <div style={{padding: '100px 0 100px 0'}}>
          {selectedProject === false ? '' : <ProjectPage project={selectedProject} setSelectedProject={setSelectedProject} />}
          <div id="landing-content">
            
            <div className="margin-page display-flex">
              {['U', 'X', 'space', '&', 'space', 'U', 'I'].map((letter, index) => <div key={index}> { letter === 'space' ? <div style={{width: '4vw'}} /> : <p className="enterprise-name" style={{animationDelay: `${index}00ms`}}>{letter}</p> }</div> )}
            </div>
            <div className="margin-page display-flex">
              {['D', 'E', 'S', 'I', 'G', 'N', 'E', 'R'].map((letter, index) => <div key={index}> { letter === 'space' ? <div style={{width: '4vw'}} /> : <p className="enterprise-name" style={{animationDelay: `${index}00ms`}}>{letter}</p> }</div> )}
            </div>

            <div className="list-all-projects margin-page">
              <div className="row-projects">
                {projects.map((project, index) =>
                  <div key={index}div className="project-card" style={{animationDelay: `0.${index}s`}}>
                    <img src={project.image} onClick={() => { scrollToTop(); setSelectedProject(project); setTimeout(() => document.getElementById('landing-content').style.display = "none", 900 )}}/>
                    <p className="project-title">{project.title}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;