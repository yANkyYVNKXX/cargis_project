import {useParams} from 'react-router-dom';

import {getOrder} from 'data/api/orders';

import {useQuery} from 'core/hooks/use_query';

import {OrderPageContent} from 'presentation/components/order_page_content';
import {OrderPageHeader} from 'presentation/components/order_page_header';
import {Preloader} from 'presentation/components/preloader';

export const OrderPage = () => {
  const {id} = useParams();

  const {data: order, isFetching} = useQuery<OrderModel>(() => getOrder(Number(id)));

  if (isFetching) return <Preloader />;

  if (!order) return <span>Заявки не существует</span>;

  return (
    <div>
      <OrderPageHeader order={order} />
      <OrderPageContent order={order} />
    </div>
  );
};
