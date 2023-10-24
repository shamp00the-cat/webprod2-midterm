import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Row,
  Card,
  Button,
} from "react-bootstrap";
import { ClientID, ClientSecret, RedirectURI } from "./components/ListGroup";

function Login() {
  const [accessToken, setAccessToken] = useState("");
  const AuthEndpoint = "https://accounts.spotify.com/authorize";
  const ResponseType = "token";

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
      .then((data) => setAccessToken(data.access_token));
  }, []);
  return (
    <div className="Login">
      <header className="Login-header">
        <h1>Spotify React</h1>
        <a
          href={`${AuthEndpoint}?client_id=${ClientID}&redirect_uri=${RedirectURI}&response_type=${ResponseType}`}
        >
          Login
        </a>
      </header>
    </div>
  );
}

export default Login;
