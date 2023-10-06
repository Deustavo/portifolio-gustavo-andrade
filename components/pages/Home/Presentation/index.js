import styles from "../home-page.module.css";

function Presentation() {
  return (
    <h1 className={styles.presentation}>
      <div className="margin-page display-flex">
        {['G', 'U', 'S', 'T', 'A', 'V', 'O'].map((letter, index) =>
          <div key={index}>
            <p className="enterprise-name" style={{animationDelay: `${index}00ms`}}>
              {letter}
            </p>
          </div>
        )}
      </div>
      <div className="margin-page display-flex">
        {['A', 'N', 'D', 'R', 'A', 'D', 'E'].map((letter, index) =>
          <div key={index}>
            <p className="enterprise-name" style={{animationDelay: `${index}00ms`}}>
              {letter}
            </p>
          </div>
        )}
      </div>
      <div className="margin-page display-flex">
        {['U', 'X'].map((letter, index) =>
          <div key={index}>
            <p className="enterprise-name enterprise-name-sm" style={{animationDelay: `${index}00ms`, color: "var(--primary-color)"}}>
              {letter}
            </p>
          </div>
        )}

        {['space', '&', 'space'].map((letter, index) =>
          <div key={index}>
            {
              letter === 'space'
              ?
              <div style={{width: '2vw'}} />
              :
              <p className="enterprise-name enterprise-name-sm" style={{animationDelay: `${index}00ms`}}>
                {letter}
              </p>
            }
          </div>
        )}

        {['U', 'I'].map((letter, index) =>
          <div key={index}>
            <p className="enterprise-name enterprise-name-sm" style={{animationDelay: `${index}00ms`, color: "var(--primary-color)"}}>
              {letter}
            </p>
          </div>
        )}

        {['space', 'D', 'E', 'S', 'I', 'G', 'N', 'E', 'R'].map((letter, index) =>
          <div key={index}>
            {
              letter === 'space'
              ?
              <div style={{width: '2vw'}} />
              :
              <p className="enterprise-name enterprise-name-sm" style={{animationDelay: `${index}00ms`}}>
                {letter}
              </p>
            }
          </div>
        )}
      </div>
      <div className="margin-page display-flex">
      </div>
    </h1>
  )
}

export default Presentation;
