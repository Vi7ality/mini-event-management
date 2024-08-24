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
}

const TableRow: React.FC<TableRowProps> = ({
  eventName,
  date,
  time,
  category,
  ticketCount,
  price,
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
        <button onClick={}>
          <FaEdit />
        </button>
        <button>
          <MdDeleteForever />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
