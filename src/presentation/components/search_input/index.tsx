import {InputHTMLAttributes, memo, SyntheticEvent} from 'react';

import {Select} from 'presentation/components/select';
import {TextField} from 'presentation/components/text_field';

import search from 'assets/images/icons/search.svg';

import styles from './search_input.module.scss';

type Props = {
  selectVariables?: string[];
  currentVariant?: string;
  onChangeVariant?: (variant: string, e: SyntheticEvent) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const SearchInputComponent = ({selectVariables, currentVariant, onChangeVariant, ...props}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.search_type}>
        <img src={search} alt='search'/>
        {selectVariables && selectVariables.length ? (
          <Select
            currentVariant={currentVariant ?? selectVariables[0]}
            selectVariables={selectVariables}
            onChange={onChangeVariant}
          />
        ) : null}
      </div>
      <TextField {...props} />
    </div>
  );
};

export const SearchInput = memo(SearchInputComponent);
