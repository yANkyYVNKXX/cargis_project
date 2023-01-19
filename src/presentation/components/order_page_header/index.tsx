import {useNavigate} from 'react-router-dom';

import {Order} from 'presentation/components/orders_content/order';

import back from 'assets/images/icons/back.svg';

import styles from './header.module.scss';

type Props = {
  order: OrderModel;
};

export const OrderPageHeader = ({order}: Props) => {
  const navigate = useNavigate();

  const handleBackPage = () => navigate(-1);

  return (
    <div className={styles.container}>
      <div className={styles.header_info}>
        <button onClick={handleBackPage} className={styles.back}>
          <img src={back} alt="back" />
        </button>
        <Order order={order} className={styles.order_override} isHeader />
      </div>
      <div className={styles.header_buttons}>
        <div className={styles.flight_button} />
        <div className={styles.edit_button} />
        <div className={styles.edit_button} />
      </div>
    </div>
  );
};
