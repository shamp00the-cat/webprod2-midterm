import { REDIRECT_URI, CLIENT_SECRET, CLIENT_ID } from "../../vite.config";

function ListGroup() {
  const items = [REDIRECT_URI, CLIENT_ID, CLIENT_SECRET];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
