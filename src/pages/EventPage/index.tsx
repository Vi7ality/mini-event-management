import EventImage from './components/EventImage';
import { useGetEventQuery } from '../../services/api';
import { useParams } from 'react-router-dom';
import EventInfo from './components/EventInfo';
import Container from '../../shared/Container';
import styles from './EventPage.module.scss';

const EventPage = () => {
  const { eventID } = useParams<{ eventID: string }>();
  const { data, error, isLoading } = useGetEventQuery(eventID);
  const [updateEvent] = useUpdateEventMutation();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    category: '',
    tickets: '',
    price: '',
    description: '',
  });
  return (
    <Container>
      {data && (
        <div className={styles.eventPage}>
          <EventImage name={data.name} image={data.image} />
          <EventInfo
            name={data.name}
            description={data.description}
            date={data.date}
            category={data.category}
            tickets={data.tickets}
            price={data.price}
          />
        </div>
      )}
    </Container>
  );
};

export default EventPage;
