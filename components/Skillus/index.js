import React from 'react';

import styles from '../../styles/product-page.module.css';

function Skillus() {
  return (
    <div className="width-full display-flex flex-direction-column margin-product-page">
      <h1>Rede social para compartilhar conhecimento</h1>
      <img className={styles.capaProduct} src="./img/skillus/wireframe.png" />
      <h1>Desenvolvimento da solução</h1>
      <p className={styles.paragraph}>Em breve.</p>
    </div>
  );
}

export default Skillus;