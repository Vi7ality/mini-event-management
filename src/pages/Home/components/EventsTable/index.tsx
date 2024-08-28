import React from 'react';
import TableHeader from '../TableHeader';
import styles from './Table.module.scss';
import Container from '../../../../shared/Container';
import TableRow from '../TableRow';
import { useGetAllEventsQuery } from '../../../../services/api';

const EventsTable: React.FC = () => {
  const { data, isLoading } = useGetAllEventsQuery();

  if ((!isLoading && !data) || data?.length === 0) {
    return (
      <Container>
        <div>No events available.</div>
      </Container>
    );
  }

  return (
    <Container>
      <table className={styles.table}>
        <TableHeader />
        <tbody>
          {data?.map(event => (
            <TableRow
              key={event.id}
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
