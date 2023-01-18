import {api} from 'core/api';

const path = '/orders';

export const getOrders = async () => {
  try {
    const {data} = await api.get<OrderModel[]>(`${path}/list`);

    return data;
  } catch (e) {
    alert(e);
  }
};

export const getOrder = async (id: number) => {
  try {
    const {data} = await api.get<any>(`${path}/${id}`);

    return data;
  } catch (e) {
    alert(e);
  }
};
