import React from 'react';

import styles from '../../../styles/product-page.module.css';

function DanielAraujo() {
  return (
    <div className="width-full display-flex flex-direction-column margin-product-page">
      <h1>Site para portifólio de advogado</h1>
      <img className={styles.capaProduct} src="./img/danielaraujo/banner.png" />
      <h1>Desenvolvimento da solução</h1>
      <p className={styles.paragraph}>Em breve.</p>
    </div>
  );
}

export default DanielAraujo;