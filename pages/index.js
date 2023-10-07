import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Presentation from '../components/Home/Presentation/main';
import Projects from '../components/Home/Projects/main';
import About from '../components/Home/About/main';

function LandingPage() {
  return (
    <div id="home-page">
      <Head>
        <title>Gustavo Andrade's portfolio</title>
      </Head>

      <main className="background-page">
        <Header />
        <div style={{padding: '100px 0 100px 0'}}>
          <div id="landing-content">

            <Presentation />

            <About />

            <Projects />

          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;