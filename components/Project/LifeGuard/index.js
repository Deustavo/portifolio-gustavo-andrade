import React from 'react';

import styles from '../../../styles/product-page.module.css';

function LifeGuard() {
  return (
    <div className="width-full display-flex flex-direction-column margin-product-page">
      <h1>Solução de interface para aplicativo de cameras de segurança eletrônica</h1>
      <img className={styles.capaProduct} src="/img/lifeguard/banner.png" />
      <h1>Desenvolvimento da solução</h1>
      <p className={styles.paragraph}>Em breve.</p>
    </div>
  );
}

export default LifeGuard;