import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { WeatherContext } from "../context/context";

const Weather = () => {
  const context = useContext(WeatherContext);
  return (
    <div className="col-md-4 offset-md-4 col-sm-8 col-xs-10 ">
      <Card className=" mt-5 mx-1 text-center">
        <Card.Body>
          <img
            src={
              "http://openweathermap.org/img/wn/" +
              context.weather[0].icon +
              "@2x.png"
            }
            style={{ maxHeight: "100px", maxWidth: "100px" }}
          />
          <Card.Title className="display-6 text-center">
            {context.weather[0].main}
          </Card.Title>
          <hr />
          <Card.Text
            className="text-center text-warning"
            style={{ fontSize: "1.5em" }}
          >
            {context.weather[0].description}
          </Card.Text>

          <Card.Text>Temperature: {context.main.temp}</Card.Text>
          <Card.Text>Max Temperature: {context.main.temp_max}</Card.Text>
          <Card.Text>Min Temperature: {context.main.temp_min}</Card.Text>

          <Link className="btn btn-outline-primary px-5" to="/explore">
            Explore More
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Weather;
