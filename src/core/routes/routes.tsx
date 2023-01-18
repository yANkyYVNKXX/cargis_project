import React from 'react';

import {OrderPage} from 'presentation/sections/order';
import {OrdersPage} from 'presentation/sections/orders';

export const PublicRoutes = [
  {
    path: '/',
    element: <OrdersPage />,
  },
  {
    path: '/order/:id',
    element: <OrderPage />,
  },
];
