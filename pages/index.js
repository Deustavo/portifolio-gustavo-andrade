import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { projects } from './api/projects';
import Header from '../components/Header';

function LandingPage() {
  const router = useRouter();

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function animationCloseIndex() {
    document.getElementsByClassName("backgound-page")[0].classList.add("animation-close-index");
  }

  return (
    <div>
      <Head>
        <title>Gustavo Andrade's portfolio</title>
      </Head>

      <main className="backgound-page">
        <Header />
        <div style={{padding: '100px 0 100px 0'}}>
          <div id="landing-content">
            
            <div className="margin-page display-flex">
              {['U', 'X'].map((letter, index) => <div key={index}> { letter === 'space' ? <div style={{width: '4vw'}} /> : <p className="enterprise-name" style={{animationDelay: `${index}00ms`, color: "var(--primary-color)"}}>{letter}</p> }</div> )}
              {['space', '&', 'space'].map((letter, index) => <div key={index}> { letter === 'space' ? <div style={{width: '4vw'}} /> : <p className="enterprise-name" style={{animationDelay: `${index}00ms`}}>{letter}</p> }</div> )}
              {['U', 'I'].map((letter, index) => <div key={index}> { letter === 'space' ? <div style={{width: '4vw'}} /> : <p className="enterprise-name" style={{animationDelay: `${index}00ms`, color: "var(--primary-color)"}}>{letter}</p> }</div> )}
            </div>
            <div className="margin-page display-flex">
              {['D', 'E', 'S', 'I', 'G', 'N', 'E', 'R'].map((letter, index) => <div key={index}> { letter === 'space' ? <div style={{width: '4vw'}} /> : <p className="enterprise-name" style={{animationDelay: `${index}00ms`}}>{letter}</p> }</div> )}
            </div>

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
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;