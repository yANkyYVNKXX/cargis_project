import {ReactNode} from 'react';

import {Header} from 'presentation/sections/header';
import {LeftSidebar} from 'presentation/sections/left_sidebar';

import styles from './default_layout.module.scss';

type Props = {
  children: ReactNode;
};

export const DefaultLayout = ({children}: Props) => {
  return (
    <div className={styles.container}>
      <LeftSidebar />
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
};
