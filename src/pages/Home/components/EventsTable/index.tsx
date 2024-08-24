import React from 'react';
import TableHeader from '../TableHeader';
import styles from './Table.module.scss';
import Container from '../../../../shared/Container';

const EventsTable: React.FC = () => {
  return (
    <Container>
      <table className={styles.table}>
        <TableHeader />
        <tbody>{/* Your table rows will go here */}</tbody>
      </table>
    </Container>
  );
};

export default EventsTable;
