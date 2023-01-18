import {ChangeEvent, SyntheticEvent} from 'react';

import {NewOrder} from 'presentation/components/new_order';
import {SearchInput} from 'presentation/components/search_input';
import {Switcher} from 'presentation/components/switcher';

import styles from './functional_orders_panel.module.scss';

type Props = {
  onChangeSearchValue: (e: ChangeEvent<HTMLInputElement>) => void;
  searchValue?: string;
  selectVariables?: string[];
  currentVariant?: string;
  onChangeVariant?: (variant: string, e: SyntheticEvent) => void;
};

export const FunctionalOrdersPanel = ({onChangeSearchValue, ...props}: Props) => {
  return (
    <div className={styles.container}>
      <SearchInput placeholder="Поиск заявок" onChange={onChangeSearchValue} {...props} />
      <NewOrder />
      <Switcher />
    </div>
  );
};
