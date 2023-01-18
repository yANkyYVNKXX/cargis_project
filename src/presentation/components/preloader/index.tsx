import spinner from 'assets/images/gif/spinner.gif';

import styles from './preloader.module.scss';

export const Preloader = () => {
  return (
    <div className={styles.container}>
      <img src={spinner} width={40} height={40} alt='loading'/>
    </div>
  );
};
