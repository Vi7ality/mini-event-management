import styles from './EventInfo.module.scss';

interface IEventInfo {
  name: string;
  date: string;
  category: string;
  tickets: number;
  price: string;
  description: string;
}

const EventInfo = ({
  name,
  date,
  category,
  tickets,
  price,
  description,
}: IEventInfo) => {
  const formattedDate = new Date(date).toLocaleDateString();
  return (
    <div className={styles.details}>
      <h1>{name}</h1>
      <p>
        <strong>Date:</strong> {formattedDate}
      </p>
      <p>
        <strong>Category:</strong> {category}
      </p>
      <p>
        <strong>Tickets Available:</strong> {tickets}
      </p>
      <p>
        <strong>Price:</strong> {price} UAH
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
    </div>
  );
};

export default EventInfo;
