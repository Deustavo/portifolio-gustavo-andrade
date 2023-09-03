import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Home from '../components/pages/Home';

function HomePage() {

  return (
    <div id="home-page">
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