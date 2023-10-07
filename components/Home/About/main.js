import { useEffect, useState } from "react";
import useWindow from "../../../composables/window";

const examplePhotos = [
  "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
];

function About() {
  if (typeof window === "undefined") return <div />;

  const { scrollY } = useWindow();

  /**
   * Determina a posição do container "sobre mim" na página
   */
  const [containerPosition, setContainerPosition] = useState({});

  useEffect(() => {
    window.addEventListener("scroll", containerPositionStyle);
  }, []);

  const containerPositionStyle = () => {
    if (window.scrollY > 3520) {
      setContainerPosition({
        position: "absolute",
        bottom: "80px"
      });
      return;
    }

    if (window.scrollY > 580) {
      setContainerPosition({
        position: "fixed",
        top: "80px"
      });
      return;
    }

    setContainerPosition({
      position: "relative",
    });
  };
  const rotateCube = () => {
    let rotateX = (scrollY - 720) / 10;

    if (scrollY < 720) {
      rotateX = 0;
    }

    if (scrollY > 3400) {
      rotateX = 270;
    }

    const transform = `rotateX(${rotateX}deg)`;

    return {
      transform,
    };
  };

  return (
    <div>
      <div className="home-about margin-page">
        <div style={containerPosition}>
          <p className="home-about__title">Sobre mim</p>
          <div className="home-about__body">
            <div className="home-about__text-container">
              <p className="home-about__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
              <p className="home-about__text">
                The industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make.
              </p>
              <p className="home-about__text">
                Type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining.
              </p>
              <p className="home-about__text">
                Essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets.
              </p>
              <p className="home-about__text">
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="home-about__photos-container">
              <div className="home-about__photos-cube-wrap">
                <div className="home-about__photos-cube" style={rotateCube()}>
                  <img
                    className="home-about__photo"
                    src={examplePhotos[0]}
                    style={{ transform: "rotateY(0deg) translateZ(150px)" }}
                  />
                  <img
                    className="home-about__photo"
                    src={examplePhotos[1]}
                    style={{ transform: "rotateX(-90deg) translateZ(150px)" }}
                  />
                  <img
                    className="home-about__photo"
                    src={examplePhotos[2]}
                    style={{
                      transform:
                        "rotateY(180deg) translateZ(150px) rotateX(180deg)",
                    }}
                  />
                  <img
                    className="home-about__photo"
                    src={examplePhotos[1]}
                    style={{ transform: "rotateX(90deg) translateZ(150px)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
