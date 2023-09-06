import { useState } from "react";
import styles from "../home-page.module.css";

export default function About() {
  const [experiences, setExperiences] = useState([
    {
      name: "Experiencia",
      image: "imagem",
      description: "DEscrição"
    },
    {
      name: "Experiencia",
      image: "imagem",
      description: "DEscrição"
    },
    {
      name: "Experiencia",
      image: "imagem",
      description: "DEscrição"
    },
  ]); 

  return (
    <div className={`margin-page`}>
      <h2 className={styles.showcase__title}
      >Minha experiencia
      </h2>
      <div className={styles.experiences}>
        {experiences.map((experience, index) => 
          <div key={index} className={styles.experience}>
            <p>{ experience.name } - { index }</p>
            <p>{ experience.description }</p>
          </div>
        )}
      </div>
    </div>
  )
}