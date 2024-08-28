import 'react-toastify/dist/ReactToastify.css';
import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './shared/SharedLayout';

const HomePage = lazy(() => import('./pages/Home'));
const AddEventPage = lazy(() => import('./pages/AddEventPage'));
const EventPage = lazy(() => import('./pages/EventPage'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/:eventID" element={<EventPage />} />
          <Route path="/create-event" element={<AddEventPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
