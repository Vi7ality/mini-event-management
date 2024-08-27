interface IEditEventForm {
  name: string;
  date: string;
  category: string;
  tickets: string;
  price: string;
  description: string;
  handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
  handleSave(): void;
}

const EditEventForm = ({
  name,
  date,
  category,
  tickets,
  price,
  description,
  handleChange,
  handleSave,
}: IEditEventForm) => {
  return (
    <form>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <input type="date" name="date" value={date} onChange={handleChange} />
      <input
        type="text"
        name="category"
        value={category}
        onChange={handleChange}
      />
      <input
        type="number"
        name="tickets"
        value={tickets}
        onChange={handleChange}
      />
      <input type="text" name="price" value={price} onChange={handleChange} />
      <textarea
        name="description"
        value={description}
        onChange={handleChange}
      />
      <button onClick={handleSave}>Save</button>
    </form>
  );
};

export default EditEventForm;
