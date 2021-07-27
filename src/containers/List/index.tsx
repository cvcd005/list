import React, { useState, useCallback } from 'react';
import { useEffect } from 'react';
import { getPostsApi, getUserApi } from '../../api';
import { Post, User } from '../../types';
import { Card } from '../../component/Card';
import styles from './styles.module.scss';

export const List: React.FC = () => {
  const [status, setStatus] = useState(false);
  const [list, setList] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [normalizedUsers, setNormalizedUsers] = useState<{
    [key: number]: { username: string; name: string };
  }>({});
  const [filteredList, setFilteredList] = useState<Post[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    (async () => {
      const result = await Promise.all([getPostsApi(), getUserApi()]);
      setList(result[0]);
      setUsers(result[1]);
      setStatus(true);
    })();
  }, []);

  useEffect(() => {
    const tmp: { [key: number]: { username: string; name: string } } = {};
    users.map((el) => {
      tmp[el.id] = { username: el.username, name: el.name };
      setNormalizedUsers(tmp);
      return null;
    });
  }, [users]);

  useEffect(() => {
    if (filter) {
      const tmp = list.filter((el) => el.title.includes(filter));
      return setFilteredList(tmp);
    }
    setFilteredList(list);
  }, [list, filter]);

  const handleChange = useCallback((e) => {
    setFilter(e.target.value);
  }, []);

  if (!status) {
    return <div>Загружаем</div>;
  }

  return (
    <div>
      <div className={styles.form}>
        <span>Filter by title text</span>
        <input onChange={handleChange} className={styles.input} />
      </div>

      <div className={styles.list}>
        {filteredList.map((el) => (
          <Card
            key={el.id}
            name={normalizedUsers[el.userId].name}
            username={normalizedUsers[el.userId].username}
            title={el.title}
            body={el.body}
          />
        ))}
      </div>
    </div>
  );
};
