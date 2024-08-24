import React from 'react';
import styles from './TableHeader.module.scss';

const TableHeader: React.FC = () => {
  return (
    <thead className={styles.tableHeader}>
      <tr>
        <th>Назва події</th>
        <th>Дата та час</th>
        <th>Категорія</th>
        <th>Кількість квитків</th>
        <th>Вартість</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
