import React from 'react';
import TableHeader from '../TableHeader';
import styles from './Table.module.scss';
import Container from '../../../../shared/Container';
import TableRow from '../TableRow';

const EventsTable: React.FC = () => {
  return (
    <Container>
      <table className={styles.table}>
        <TableHeader />
        <tbody>
          <TableRow
            eventName="Концерт"
            date="20.07.25"
            time="15:00"
            category="концерт"
            ticketCount={8}
            price="250 uah"
          />
        </tbody>
      </table>
    </Container>
  );
};

export default EventsTable;
