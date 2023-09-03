
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head';
import Project from '../../components/Project/ProjectPage';
import { projects } from '../api/projects';
import Header from '../../components/Header';

function ProjectPage() {
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState(false);
  const [closeProject, setCloseProject] = useState(false);

  useEffect(() => {
    const page = projects.filter((project) => project.slug === router.query.slug);
    setSelectedProject(page[0]);
  }, [router]);

  return (
    <div className={closeProject ? "close-animation" : ""}>
      <Head>
        <title>{router.query.slug} | Gustavo Andrade's portfolio</title>
      </Head>
      
      <main className='project-page'>
        <Header />

        <div style={{padding: '100px 0 100px 0'}}>
          <Project
            project={selectedProject}
            setSelectedProject={setSelectedProject}
            setCloseProject={setCloseProject}
          />
        </div>
      </main>
    </div>
  )
}

export default ProjectPage;
