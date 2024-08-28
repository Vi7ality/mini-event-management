import styles from './TableHeader.module.scss';

interface ITableHeader {
  handleSort(arg: string): void;
}

const TableHeader = ({ handleSort }: ITableHeader) => {
  return (
    <thead className={styles.tableHeader}>
      <tr>
        <th
          className={styles.filter}
          onClick={() => handleSort('name')}
          title="Сортувати за ім'ям"
        >
          Назва події
        </th>
        <th
          className={styles.filter}
          onClick={() => handleSort('date')}
          title="Сортувати за датою"
        >
          Дата та час
        </th>
        <th
          className={styles.filter}
          onClick={() => handleSort('category')}
          title="Сортувати за категорією"
        >
          Категорія
        </th>
        <th
          className={styles.filter}
          onClick={() => handleSort('tickets')}
          title="Сортувати за квитками"
        >
          Кількість квитків
        </th>
        <th
          className={styles.filter}
          onClick={() => handleSort('price')}
          title="Сортувати за ціною"
        >
          Вартість
        </th>
        <th>Дії</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
