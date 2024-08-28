import EventImage from './components/EventImage';
import { useGetEventQuery, useUpdateEventMutation } from '../../services/api';
import { useParams } from 'react-router-dom';
import EventInfo from './components/EventInfo';
import Container from '../../shared/Container';
import styles from './EventPage.module.scss';
import { useEffect, useState } from 'react';
import EditEventForm from './components/EditEventForm';

const EventPage = () => {
  const { eventID } = useParams<{ eventID: string }>();
  const { data } = useGetEventQuery(eventID);
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

  useEffect(() => {
    if (data) {
      setFormData({
        name: data.name,
        date: data.date,
        category: data.category,
        tickets: data.tickets.toString(),
        price: data.price,
        description: data.description,
      });
    }
  }, [data]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await updateEvent({ id: eventID, ...formData }).unwrap();
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update event:', error);
    }
  };

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <Container>
      {data && (
        <div className={styles.eventPage}>
          <EventImage name={data.name} image={data.image} />
          {isEditing ? (
            <EditEventForm
              name={formData.name}
              date={formData.date}
              category={formData.category}
              tickets={formData.tickets}
              price={formData.price}
              description={formData.description}
              handleChange={handleChange}
              handleSave={handleSave}
            />
          ) : (
            <EventInfo
              name={data.name}
              description={data.description}
              date={data.date}
              category={data.category}
              tickets={data.tickets}
              price={data.price}
              setIsEditing={setIsEditing}
            />
          )}
        </div>
      )}
    </Container>
  );
};

export default EventPage;
