import React, { useEffect, useState } from 'react';

function LandingPage() {
  const [hideHeader, setHideHeader] = useState(false);

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
          <p style={{ marginRight: 12 }}>GITHUB</p>
          <p>LINKEDIN</p>
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

      <div className="list-all-projects margin-page">
        <div className="row-projects">
          <div className="project-card">project 1</div>
          <div className="project-card">project 2</div>
          <div className="project-card">project 3</div>
          <div className="project-card">project 4</div>
        </div>
        <div className="row-projects">
          <div className="project-card">project 5</div>
          <div className="project-card">project 6</div>
          <div className="project-card">project 7</div>
          <div className="project-card">project 8</div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;