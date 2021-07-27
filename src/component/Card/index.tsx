import React from 'react';
import styles from './styles.module.scss';

type Props = {
  name: string;
  username: string;
  title: string;
  body: string;
};

export const Card: React.FC<Props> = ({ name, username, title, body }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span>{`${name} - ${username}`}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.body}>{body}</div>
      </div>
    </div>
  );
};
