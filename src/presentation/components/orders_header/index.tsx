import {ChangeEvent, memo, SyntheticEvent} from 'react';

import {FunctionalOrdersPanel} from 'presentation/components/functional_orders_panel';
import {StatusesOrdersPanel} from 'presentation/components/statuses_orders_panel';


type Props = {
  onChangeSearchValue: (e: ChangeEvent<HTMLInputElement>) => void;
  searchValue?: string;
  selectVariables?: string[];
  currentVariant?: string;
  onChangeVariant?: (variant: string, e: SyntheticEvent) => void;
};

const OrdersHeaderComponent = (props: Props) => {
  return (
    <header>
      <FunctionalOrdersPanel {...props} />
      <StatusesOrdersPanel />
    </header>
  );
};

export const OrdersHeader = memo(OrdersHeaderComponent);
