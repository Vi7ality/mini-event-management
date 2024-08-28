import styles from './TableHeader.module.scss';

interface ITableHeader {
  handleSort(arg: string): void;
}

const TableHeader = ({ handleSort }: ITableHeader) => {
  return (
    <thead className={styles.tableHeader}>
      <tr>
        <th className={styles.filter} onClick={() => handleSort('name')}>
          Назва події
        </th>
        <th className={styles.filter} onClick={() => handleSort('date')}>
          Дата та час
        </th>
        <th className={styles.filter} onClick={() => handleSort('category')}>
          Категорія
        </th>
        <th className={styles.filter} onClick={() => handleSort('tickets')}>
          Кількість квитків
        </th>
        <th className={styles.filter} onClick={() => handleSort('price')}>
          Вартість
        </th>
        <th>Дії</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
