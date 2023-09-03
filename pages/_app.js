import '../styles/globals.css';
import '../styles/animation-open-project.css';
import '../styles/animation-close-project.css';

function MyApp({ Component, pageProps }) {
  return <>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
    <Component {...pageProps} />
  </>
}

export default MyApp
