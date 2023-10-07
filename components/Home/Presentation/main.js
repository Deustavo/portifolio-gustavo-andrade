import useWindow from "../../../composables/window";

function Presentation() {
  const { scrollY } = useWindow();

  const fadeOutAnimation = () => {
    const left = -(scrollY *  2);
    const opacity = 1 - (scrollY / 400);

    return {
      position: "relative",
      left,
      opacity
    }
  };

  return (
    <div>
      <div style={fadeOutAnimation()}>
        <div className="margin-page display-flex">
          {["G", "U", "S", "T", "A", "V", "O"].map((letter, index) => (
            <div key={index}>
              <p
                className="enterprise-name"
                style={{ animationDelay: `${index}00ms` }}
              >
                {letter}
              </p>
            </div>
          ))}
        </div>

        <div className="margin-page display-flex">
          {["A", "N", "D", "R", "A", "D", "E"].map((letter, index) => (
            <div key={index}>
              <p
                className="enterprise-name"
                style={{ animationDelay: `${index}00ms` }}
              >
                {letter}
              </p>
            </div>
          ))}
        </div>

        <div className="margin-page display-flex">
          {["U", "X"].map((letter, index) => (
            <div key={index}>
              <p
                className="enterprise-name"
                style={{
                  animationDelay: `${index}00ms`,
                  color: "var(--primary-color)",
                }}
              >
                {letter}
              </p>
            </div>
          ))}

          {["space", "&", "space"].map((letter, index) => (
            <div key={index}>
              {letter === "space" ? (
                <div style={{ width: "4vw" }} />
              ) : (
                <p
                  className="enterprise-name"
                  style={{ animationDelay: `${index}00ms` }}
                >
                  {letter}
                </p>
              )}
            </div>
          ))}

          {["U", "I"].map((letter, index) => (
            <div key={index}>
              <p
                className="enterprise-name"
                style={{
                  animationDelay: `${index}00ms`,
                  color: "var(--primary-color)",
                }}
              >
                {letter}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Presentation;
