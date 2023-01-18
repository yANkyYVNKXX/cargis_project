import classNames from 'classnames';

import styles from './content.module.scss';

type Props = {
  order: OrderModel;
};

export const OrderPageContent = ({order}: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <div className={classNames(styles.content_block, styles.main_block)}>
          <span className={styles.header_text}>Детали перевозки</span>
        </div>
        <div className={styles.additional_blocks}>
          <div className={classNames(styles.content_block, styles.additional_block)}>
            <span className={styles.header_text}>Погрузка</span>
          </div>
          <div className={classNames(styles.content_block, styles.additional_block)}>
            <span className={styles.header_text}>Выгрузка</span>
          </div>
          <div className={classNames(styles.content_block, styles.additional_block)}>
            <span className={styles.header_text}>Дополнительно</span>
          </div>
        </div>
      </div>
      <div className={styles.right_block}>
        <div className={classNames(styles.content_block, styles.customer_block)}>
          <span className={styles.header_text}>Заказчик</span>
        </div>
        <div className={classNames(styles.content_block, styles.map_block)} />
      </div>
    </div>
  );
};
