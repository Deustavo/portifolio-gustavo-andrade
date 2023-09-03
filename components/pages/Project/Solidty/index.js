import React from 'react';

import styles from '../product-page.module.css';

function Solidty({setModalImageIsOpen}) {
  return (
    <div className="width-full display-flex flex-direction-column margin-product-page">
      <h1>Uma nova solução de banco digital</h1>
      <p className={styles.paragraph}><i>Solidty Bank</i> é um banco digital que foi desenvolvido como <i>case</i> durante um curso de React JS e React Native oferecido pela <a target="_blank" href="https://www.gama.academy/"><b style={{ color: "var(--primary-color)" }}>Gama Academy</b></a> em parceria com a <a target="_blank" href="https://www.accenture.com/br-pt?c=acn_glb_brandexpressiongoogle_11608449&n=psgs_1020&gclsrc=ds"><b style={{ color: "var(--primary-color)" }}>Accenture</b></a>.</p>
      <img className={styles.capaProduct} src="/img/solidty/wireframe.png" />
      <p className={styles.paragraph}>Sua interface foi desenvolvida com o objetivo de fornecer ao usuário acesso a <i>dashboard</i> de um banco digital de forma intuitiva e com fluxo de páginas fluido.</p>
      <h1>O problema</h1>
      <div>
        <img className={styles.creditCardImage} src="/img/solidty/creditCard.png"/>
        <p className={styles.paragraph}>É um desafio para os bancos que estão a mais tempo no mercado se atualizarem para ter interfaces modernas e com boa usabilidade. É necessario que uma interface tenha estudos de UI e UX para obter um crescimento escalar em seu negócio e seus usuários tenham um número reduzido de problemas durante o uso.</p>
      </div>
      <h1>Personas</h1>
      <p className={styles.paragraph}>Em breve.</p>
      <h1>Resultado</h1>
      <img className={styles.capaProduct} src="/img/solidty/result.png" />
    </div>
  );
}

export default Solidty;