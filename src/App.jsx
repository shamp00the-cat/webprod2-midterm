//import ListGroup from "./components/ListGroup";
import "bootstrap/dist/css/bootstrap.css";
import { Container, InputGroup, FormControl, Card, Row, Button } from "react";
import { useState, useEffect } from "react";
import { ClientID, ClientSecret, RedirectURI } from "./components/ListGroup";

function App() {
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        ClientID +
        "&client_secret=" +
        ClientSecret,
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search For Artist"
            type="input"
            onKeyDown={(event) => {
              if (event.key == "Enter") {
                console.log("pressed enter");
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button
            onClick={() => {
              console.log("Clicked Button");
            }}
          >
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4"></Row>
        <Card>
          <Card.Body>
            <Card.Title>Album Name</Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
