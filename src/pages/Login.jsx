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
import { ClientID, ClientSecret, RedirectURI } from "../components/ListGroup";

function Login() {
  const [accessToken, setAccessToken] = useState("");
  const AuthEndpoint = "https://accounts.spotify.com/authorize";
  const ResponseType = "token";
  const textStyle = {
    fontFamily: "Bungee, sans-serif",
  };

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
  /*
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
} */

  return (
    <div className="Login text-center">
      <Container>
        <h1 style={textStyle} className="my-4">
          Get Your Top Artists
        </h1>
        <a
          href={`${AuthEndpoint}?client_id=${ClientID}&redirect_uri=${RedirectURI}&response_type=${ResponseType}`}
          className="btn btn-primary"
        >
          LOGIN
        </a>
      </Container>
    </div>
  );
}

export default Login;
