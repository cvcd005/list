import React from 'react';
import styles from './styles.module.scss';

export const LayoutDefault: React.FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
