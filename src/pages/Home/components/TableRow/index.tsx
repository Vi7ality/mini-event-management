import React from 'react';
import styles from './TableRow.module.scss';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

interface TableRowProps {
  eventName: string;
  date: string;
  category: string;
  ticketCount: number;
  price: string;
  //   notify(msg: string): void;
}

const TableRow: React.FC<TableRowProps> = ({
  eventName,
  date,
  category,
  ticketCount,
  price,
  //   notify,
}) => {
  return (
    <tr className={styles.tableRow}>
      <td>{eventName}</td>
      <td>{date}</td>
      <td>{category}</td>
      <td>{ticketCount}</td>
      <td>{price}</td>
      <td>
        <button>
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
