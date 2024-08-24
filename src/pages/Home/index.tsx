import TableHeader from './components/TableHeader';

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <table>
        <TableHeader />
        <tbody>{/* Your table rows will go here */}</tbody>
      </table>
    </>
  );
};

export default HomePage;
