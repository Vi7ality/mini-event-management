import EventsTable from './components/EventsTable';
import { ToastContainer } from 'react-toastify';

const HomePage = () => {
  //   const notify = (msg: string) => toast(msg);
  return (
    <>
      <EventsTable />
      <ToastContainer />
    </>
  );
};

export default HomePage;
