
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head';
import Project from '../../components/Project/ProjectPage';
import { projects } from '../api/projects';

function ProjectPage() {
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState(false);

  useEffect(() => {
    const page = projects.filter((project) => project.slug === router.query.slug);
    setSelectedProject(page[0]);
  }, [router]);

  return (
    <>
      <Head>
        <title>{router.query.slug} | Gustavo Andrade's portfolio</title>
      </Head>
      
      <main>
          <Project project={selectedProject} setSelectedProject={setSelectedProject} />
      </main>
    </>
  )
}

export default ProjectPage;
