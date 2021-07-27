import React from 'react';
import { List } from '../List';
import { LayoutDefault } from '../LayoutDefault';

export const App: React.FC = () => {
  return (
    <LayoutDefault>
      <h1>Test List</h1>
      <List />
    </LayoutDefault>
  );
};
