import {memo, useMemo} from 'react';
import {Link} from 'react-router-dom';

import {getOrders} from 'data/api/orders';
import {SearchOrders} from 'data/enums/search_orders.enum';

import {useQuery} from 'core/hooks/use_query';

import {Order} from 'presentation/components/orders_content/order';
import {Preloader} from 'presentation/components/preloader';

import styles from './orders.module.scss';

type Props = {
  searchValue?: string;
  searchType?: SearchOrders;
};

const OrdersContentComponent = ({searchValue, searchType}: Props) => {
  const {data: orders, isFetching} = useQuery<OrderModel[]>(getOrders);

  const searchedOrders = useMemo<OrderModel[]>(() => {
    if (!searchValue) return orders ?? [];

    if (searchType === SearchOrders.ID) {
      return orders?.filter((order) => String(order.id).match(searchValue)) ?? [];
    }

    return orders?.filter((order) => String(order.create_dt).match(searchValue)) ?? [];
  }, [searchValue, orders, searchType]);

  if (isFetching)
    return (
      <div className={styles.preloader_container}>
        <Preloader />
      </div>
    );

  return (
    <div className={styles.container}>
      {searchedOrders.map((order) => (
        <div className={styles.order}>
          <Link to={`order/${order.id}`}>
            <Order key={order.id} order={order} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export const OrdersContent = memo(OrdersContentComponent);
