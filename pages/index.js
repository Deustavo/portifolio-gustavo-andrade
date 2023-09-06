import React, { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Home from '../components/pages/Home';
import { initCursor } from "../public/customCursor"

function HomePage() {
  useEffect(() => {
    initCursor();
  }, []);

  return (
    <div id="home-page">
      <div id="blob"></div>

      <Head>
        <title>Gustavo Andrade's portfolio</title>
      </Head>

      <main className="backgound-page">
        <Header />
        <Home />
      </main>
    </div>
  );
}

export default HomePage;