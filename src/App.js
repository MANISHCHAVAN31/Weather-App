import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Spinner } from "react-bootstrap";
import "./App.css";
import axios from "axios";

// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from "./components/Home";
import CompleteData from "./components/CompleteData";
import NotFound from "./components/NotFound";

import { WeatherContext } from "./context/context";

const App = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const collectData = async () => {
    const KEY = "4d8af996ead3c11f44cfc2952b4c7e57";
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}`;

    //fetch data
    const { data } = await axios.get(weatherApi);
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

    collectData();
  }, [latitude, longitude]);

  return (
    <div>
      {isLoading ? (
        <div>
          <Container className="d-flex justify-content-center">
            <div className="my-2">
              <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="success" />
              <Spinner animation="grow" variant="danger" />
              <Spinner animation="grow" variant="warning" />
              <Spinner animation="grow" variant="info" />
              <Spinner animation="grow" variant="dark" />
            </div>
          </Container>
        </div>
      ) : (
        <div>
          <BrowserRouter>
            <WeatherContext.Provider value={data}>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/explore" element={<CompleteData />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </WeatherContext.Provider>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
};

export default App;
