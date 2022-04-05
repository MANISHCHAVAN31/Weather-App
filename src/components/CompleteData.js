import React, { useContext } from "react";
import { Card, Container } from "react-bootstrap";
import { WeatherContext } from "../context/context";
import { Link } from "react-router-dom";
import Header from "./Header";

const CompleteData = () => {
  const context = useContext(WeatherContext);

  return (
    <div>
      <Header />

      <Container className="mt-4" style={{ fontSize: "1.5em" }}>
        <Card className="border-0">
          <Card.Body>
            <img
              src={
                "http://openweathermap.org/img/wn/" +
                context.weather[0].icon +
                "@2x.png"
              }
              style={{ maxHeight: "400px", maxWidth: "400px" }}
            />
            <Card.Title className="text-warning" style={{ fontSize: "2em" }}>
              {context.weather[0].main}
            </Card.Title>
            <Card.Text>Description: {context.weather[0].description}</Card.Text>
            <Card.Text>Temperature: {context.main.temp}</Card.Text>
            <Card.Text>Max Temperature: {context.main.temp_max}</Card.Text>
            <Card.Text>Min Temperature: {context.main.temp_min}</Card.Text>
            <Card.Text>Country: {context.sys.country}</Card.Text>
            <Card.Text>Location: {context.name}</Card.Text>
            <Card.Text>Longitude: {context.coord.lon}</Card.Text>
            <Card.Text>Latitude: {context.coord.lat}</Card.Text>
            <Link className="btn btn-outline-primary px-5" to="/">
              Go Back
            </Link>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default CompleteData;
