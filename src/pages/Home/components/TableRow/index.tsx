import React from 'react';
import styles from './TableRow.module.scss';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useDeleteEventMutation } from '../../../../services/api';

interface TableRowProps {
  eventName: string;
  date: string;
  category: string;
  ticketCount: number;
  price: string;
  id: string;
  //   notify(msg: string): void;
}

const TableRow: React.FC<TableRowProps> = ({
  eventName,
  date,
  category,
  ticketCount,
  price,
  id,
  //   notify,
}) => {
  const [deleteEvent] = useDeleteEventMutation();
  const handleDeleteEvent = async () => {
    deleteEvent(id);
  };
  return (
    <tr className={styles.tableRow}>
      <td>
        <Link to={`/${id}`}>{eventName}</Link>
      </td>
      <td>{date}</td>
      <td>{category}</td>
      <td>{ticketCount}</td>
      <td>{price}</td>
      <td>
        <button onClick={() => handleDeleteEvent()}>
          <MdDeleteForever />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
