import ListGroup from "./components/ListGroup";
import "dotenv/config";

function App() {
  const name = "Casey";
  if (name)
    return (
      <div>
        <ListGroup /> {name}
      </div>
    );
}
export default App;
