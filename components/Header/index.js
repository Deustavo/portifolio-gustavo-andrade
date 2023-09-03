import React, { useEffect, useState } from 'react';

function Header() {
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    animationHeader();
  }, []);

  function animationHeader() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setHideHeader(false);
        try { document.getElementById("header-projects").style.top = window.innerWidth >= 450 ? "82px" : "77px" } catch { }
      } else {
        setHideHeader(true);
        try { document.getElementById("header-projects").style.top = "0px" } catch { }
      }
      prevScrollpos = currentScrollPos;
    }
  }

  return (
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
  )
}

export default Header;