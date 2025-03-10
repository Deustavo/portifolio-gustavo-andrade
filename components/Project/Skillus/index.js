import React from 'react';

import styles from '../../../styles/product-page.module.css';

function Skillus() {
  return (
    <div className="width-full display-flex flex-direction-column margin-product-page">
      <h1>Rede social para compartilhar conhecimento</h1>
      <img className={styles.capaProduct} src="/img/skillus/perguntas.png" />
      <h1>Desenvolvimento da solução</h1>
      <p className={styles.paragraph}>Esse foi um projeto feito durante o periodo da faculdade com o objetivo de compartilhar conhecimento entre os alunos.</p>
      <p className={styles.paragraph}>Nessa plataforma era possṕivel criar threads e interagir com outros alunos sobre os assuntos dicutidos em aula, eternizando o conhecimento entre as proximas gerações de alunos.</p>
      <h1>Tela de discussão de topco</h1>
      <img className={styles.capaProduct} src="/img/skillus/thread.png" />
      <p className={styles.paragraph}>A seguir estão alsguns passos do MVP (minimo produto viavel), ferramenta utilizada para idealizar o projeto:</p>
      <h1>Visão</h1>
      <img className={styles.capaProduct} src="/img/skillus/visao.png" />
      <h1>Objetivo</h1>
      <img className={styles.capaProduct} src="/img/skillus/objetivo.png" />
      <h1>É /Não é, Faz/Não faz</h1>
      <img className={styles.capaProduct} src="/img/skillus/faz.png" />
    </div>
  );
}

export default Skillus;