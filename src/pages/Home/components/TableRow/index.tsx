import React from 'react';
import styles from './TableRow.module.scss';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

interface TableRowProps {
  eventName: string;
  date: string;
  time: string;
  category: string;
  ticketCount: number;
  price: string;
  notify(msg: string): void;
}

const TableRow: React.FC<TableRowProps> = ({
  eventName,
  date,
  time,
  category,
  ticketCount,
  price,
  notify,
}) => {
  return (
    <tr className={styles.tableRow}>
      <td>{eventName}</td>
      <td>
        {date} {time}
      </td>
      <td>{category}</td>
      <td>{ticketCount}</td>
      <td>{price}</td>
      <td>
        <button onClick={() => notify('Edit just clicked')}>
          <FaEdit />
        </button>
        <button onClick={() => notify('Delete just clicked')}>
          <MdDeleteForever />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
