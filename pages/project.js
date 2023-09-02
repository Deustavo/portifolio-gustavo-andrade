
import React, { useEffect, useState } from 'react';
import Project from '../components/Project/ProjectPage';

function ProjectPage() {
  const [selectedProject, setSelectedProject] = useState(
    {
        image: "./img/solidty/solidty.png",
        site: "https://solidtybank.vercel.app/",
        title: "Solidty Bank"
    },);

  return (
    <Project project={selectedProject} setSelectedProject={setSelectedProject} />
  )
}

export default ProjectPage;
