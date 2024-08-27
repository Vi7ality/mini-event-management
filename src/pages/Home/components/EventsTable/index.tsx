import React from 'react';
import TableHeader from '../TableHeader';
import styles from './Table.module.scss';
import Container from '../../../../shared/Container';
import TableRow from '../TableRow';
import { useDispatch, useSelector } from 'react-redux';
import eventSlice from '../../../../store/eventsSlice';
import { selectEvents } from '../../../../store/selectors';
import { RootState } from '@reduxjs/toolkit/query';
import { AppDispatch } from '../../../../store/store';
import { useGetAllEventsQuery } from '../../../../services/api';

interface EventsTableProps {
  notify(msg: string): void;
}

const EventsTable: React.FC = ({ notify }: EventsTableProps) => {
  const { data, error, isLoading } = useGetAllEventsQuery();
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
            />
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default EventsTable;
