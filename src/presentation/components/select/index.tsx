import classNames from 'classnames';
import {memo, SyntheticEvent, useMemo, useState} from 'react';

import mark from 'assets/images/icons/mark.svg';

import styles from './select.module.scss';

type Props = {
  selectVariables: string[];
  currentVariant: string;
  onChange?: (variant: string, e: SyntheticEvent) => void;
};

const SelectComponent = ({selectVariables, onChange, currentVariant}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const variables = useMemo(
    () => selectVariables.filter((variant) => variant !== currentVariant),
    [currentVariant, selectVariables],
  );

  const handleOpenSelect = () => setIsOpen((prev) => !prev);

  const handleSelectVariant = (variant: string) => (e: SyntheticEvent) => onChange?.(variant, e);

  return (
    <div className={styles.container}>
      <div onClick={handleOpenSelect} className={classNames(styles.select, {[styles.select_open]: isOpen})}>
        <div className={styles.show_element}>
          {currentVariant && <div className={styles.variable}>{currentVariant}</div>}
          <img
            src={mark}
            className={classNames(styles.mark, {[styles.mark_open]: isOpen})}
            alt="open"
            height={6}
            width={10}
          />
        </div>
        {variables.map((variant) => (
          <div key={variant} onClick={handleSelectVariant(variant)} className={styles.variable}>
            {variant}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Select = memo(SelectComponent);
