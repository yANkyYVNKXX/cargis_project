import {memo} from 'react';

import styles from './new_order.module.scss';

const NewOrderComponent = () => {
  return <div className={styles.container} />;
};

export const NewOrder = memo(NewOrderComponent);
