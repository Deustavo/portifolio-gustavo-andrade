
import '../styles/globals.css';
import '../styles/animation-open-project.css';
import '../styles/animation-close-project.css';
import '../styles/custom-cursor.css';

function MyApp({ Component, pageProps }) {
  return <>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    />
    <Component {...pageProps} />
  </>
}

export default MyApp
