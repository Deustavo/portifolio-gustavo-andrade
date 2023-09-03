import { useRouter } from 'next/router'
import { projects } from '../../../../pages/api/projects';

export default function Projects() {
  const router = useRouter();

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function animationCloseIndex() {
    document.getElementById("home-page").classList.add("animation-close-index");
  }

  return(
    <div className="list-all-projects margin-page">
      <div className="row-projects">
        {projects.map((project, index) =>
          <div key={index} className="project-card" style={{animationDelay: `0.${index}s`}}>
            <img src={project.image} onClick={() => {
              scrollToTop();
              animationCloseIndex();
              setTimeout(() => {
                router.push(`/project/${project.slug}`);
              }, 900);
            }}/>
            <p className="project-title">{project.title}</p>
          </div>
        )}
      </div>
    </div>
  )
} 