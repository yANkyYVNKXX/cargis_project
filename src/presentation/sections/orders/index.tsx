import {ChangeEvent, useState} from 'react';

import {SearchOrders} from 'data/enums/search_orders.enum';

import {debounce} from 'core/helpers';

import {OrdersContent} from 'presentation/components/orders_content';
import {OrdersHeader} from 'presentation/components/orders_header';

const selectVariables = [SearchOrders.ID, SearchOrders.DATE];

export const OrdersPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState<SearchOrders>(SearchOrders.ID);

  const freeze500ms = debounce(500);

  const handleChangeSearchType = (variant: string) => setSearchType(variant as SearchOrders);

  const handleChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    freeze500ms(() => setSearchValue(e.target.value));
  };

  return (
    <main>
      <OrdersHeader
        onChangeSearchValue={handleChangeSearchValue}
        selectVariables={selectVariables}
        onChangeVariant={handleChangeSearchType}
        currentVariant={searchType}
      />
      <OrdersContent searchValue={searchValue} searchType={searchType} />
    </main>
  );
};
