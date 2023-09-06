import { useRouter } from 'next/router'
import { projects } from '../../../../pages/api/projects';
import styles from "../home-page.module.css";

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
      <h2 className={styles.showcase__title}>Projetos</h2>
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