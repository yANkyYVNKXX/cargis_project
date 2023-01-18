import classNames from 'classnames';
import {useMemo} from 'react';

import time from 'assets/images/icons/time.svg';
import views from 'assets/images/icons/views.svg';

import styles from './order.module.scss';

type Props = {
  order: OrderModel;
  className?: string;
  isHeader?: boolean;
};

export const Order = ({order, className, isHeader}: Props) => {
  const isActive = useMemo(() => order.load_dt && order.ending_dt, [order]);

  return (
    <div className={classNames(styles.container, className, {[styles.order_isHeader]: isHeader})}>
      <div className={styles.header}>
        <h3 className={styles.order_number}>Заявка №{order.id}</h3>
        {isActive && <span className={styles.order_status}>Активная</span>}
      </div>
      <div className={styles.footer}>
        <span className={styles.footer_text}>От {order.create_dt.slice(0, 11)}</span>
        {isActive && (
          <span className={styles.footer_text}>
            <img src={time} alt="time" />
            {order.load_dt} - {order.ending_dt}
          </span>
        )}
        <span className={styles.footer_text}>
          <img src={views} alt="views" className={styles.eye_img} />
          Просмотры: {order.views_count}
        </span>
      </div>
    </div>
  );
};
