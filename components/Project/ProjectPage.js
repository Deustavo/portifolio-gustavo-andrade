import React, { useState } from 'react';
import { useRouter } from 'next/router'

import Solidty from './Solidty';
import Skillus from './Skillus';
import LifeGuard from './LifeGuard';
import DanielAraujo from './DanielAraujo';
import styles from './modal.module.css';

function ProjectPage({project, setSelectedProject}) {
  const router = useRouter();
  const [close, setClose] = useState(false);
  const [modalImageIsOpen, setModalImageIsOpen] = useState(false);

  function closeProductPage() {
    setSelectedProject(false);
    router.push(`/`);
  }

  if (!project) {
    return <div />;
  }

  return (
      <div className={`width-full ${close ? "close-animation" : ""}`} style={{ position: 'absolute'}}>
        <div className="container width-full ">
          <div className="header-projects margin-product-page justfy-content-between" id="header-projects">
            <div className="display-flex align-items-center">
              <p className="button-text" onClick={() =>{ setClose(true), setTimeout(() => closeProductPage(), 300)}} style={{ fontSize: 36, margin: '-4px 12px 0px 0px' }}>&larr;</p>
              <h1>{project.title}</h1>
            </div>
            <a target="_blank" href={project.site} style={{ display: project.site ? 'block' : 'none', textAlign: 'center' }}>
              <i className="fas fa-external-link-alt button-text" style={{fontSize: 20}}/>
              <p style={{ fontSize: 14 }}>Solução</p>
            </a>
          </div>

          <div className="margin-top-product-page">
            {
              project.title === "Solidty Bank" ? <Solidty setModalImageIsOpen={setModalImageIsOpen} />
              : project.title === "Skillus" ? <Skillus />
              : project.title === "Life Guard" ? <LifeGuard />
              : project.title === "Daniel Araujo Advocacia" ? <DanielAraujo />
              : null
            }
          </div>

        </div>

        {!modalImageIsOpen ? '' :
          <div className={styles.backgroundModal}>
            <img className={styles.imageModal} src={modalImageIsOpen}/>
          </div>
        }
      </div>
  );
}

export default ProjectPage;