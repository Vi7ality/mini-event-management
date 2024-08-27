import React from 'react';
import TableHeader from '../TableHeader';
import styles from './Table.module.scss';
import Container from '../../../../shared/Container';
import TableRow from '../TableRow';
import { useGetAllEventsQuery } from '../../../../services/api';

interface EventsTableProps {
  notify(msg: string): void;
}

const EventsTable: React.FC = ({ notify }: EventsTableProps) => {
  const { data } = useGetAllEventsQuery();
  console.log(data);
  return (
    <Container>
      <table className={styles.table}>
        <TableHeader />
        <tbody>
          {data?.map(event => (
            <TableRow
              key={event.id}
              // notify={notify}
              eventName={event.name}
              date={event.date}
              category={event.category}
              ticketCount={event.tickets}
              price={event.price}
              id={event.id}
            />
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default EventsTable;
