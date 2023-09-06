import Presentation from "./Presentation";
import About from "./About";
import Projects from "./Projects";

export default function Home() {
  return (
    <div style={{padding: '100px 0 100px 0'}}>
      <div id="landing-content">
      
        <Presentation />

        <About />

        <Projects />

      </div>
    </div>
  )
}