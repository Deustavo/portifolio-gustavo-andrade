import React from 'react';

import styles from '../../../styles/product-page.module.css';

function LifeGuard() {
  return (
    <div className="width-full display-flex flex-direction-column margin-product-page">
      <h1>Solução de interface para aplicativo de cameras de segurança eletrônica</h1>
      <img className={styles.capaProduct} src="/img/lifeguard/banner.png" />
      <p className={styles.paragraph}>Esse foi o layout sugerido para empresa life tecnologia para seu aplciativo "LifeGuard", de cameras de segurança.</p>
      <p className={styles.paragraph}>Nele era possível ver a lsitagem de cameras, ver uma camera em tempo real e fazer a gestão ce acesso dos usuários da conta.</p>
      <h1>Fluxo de autenticação</h1>
      <img className={styles.capaProduct} src="/img/lifeguard/login.png" />
      <h1>Visão das cameras</h1>
      <img className={styles.capaProduct} src="/img/lifeguard/cameras.png" />
      <h1>Gestão de usuários</h1>
      <img className={styles.capaProduct} src="/img/lifeguard/configuracoes.png" />
    </div>
  );
}

export default LifeGuard;