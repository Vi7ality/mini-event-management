import EventsTable from './components/EventsTable';
import { ToastContainer, toast } from 'react-toastify';

const HomePage = () => {
  const notify = (msg: string) => toast(msg);
  return (
    <>
      <h1>Home Page</h1>
      <EventsTable notify={notify} />
      <ToastContainer />
    </>
  );
};

export default HomePage;
