import {memo} from 'react';

import styles from './switcher.module.scss';

const SwitcherComponent = () => <div className={styles.container} />;

export const Switcher = memo(SwitcherComponent);
