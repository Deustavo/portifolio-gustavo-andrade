import styles from "../home-page.module.css";

function Presentation() {
  return (
    <div className={styles.presentation}>
      <div className="margin-page display-flex">
        {['U', 'X'].map((letter, index) => <div key={index}> { letter === 'space' ? <div style={{width: '4vw'}} /> : <p className="enterprise-name" style={{animationDelay: `${index}00ms`, color: "var(--primary-color)"}}>{letter}</p> }</div> )}
        {['space', '&', 'space'].map((letter, index) => <div key={index}> { letter === 'space' ? <div style={{width: '4vw'}} /> : <p className="enterprise-name" style={{animationDelay: `${index}00ms`}}>{letter}</p> }</div> )}
        {['U', 'I'].map((letter, index) => <div key={index}> { letter === 'space' ? <div style={{width: '4vw'}} /> : <p className="enterprise-name" style={{animationDelay: `${index}00ms`, color: "var(--primary-color)"}}>{letter}</p> }</div> )}
      </div>
      <div className="margin-page display-flex">
        {['D', 'E', 'S', 'I', 'G', 'N', 'E', 'R'].map((letter, index) => <div key={index}> { letter === 'space' ? <div style={{width: '4vw'}} /> : <p className="enterprise-name" style={{animationDelay: `${index}00ms`}}>{letter}</p> }</div> )}
      </div>
    </div>
  )
}

export default Presentation;
