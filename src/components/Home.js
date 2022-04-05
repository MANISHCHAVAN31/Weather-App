import React, { useContext } from "react";

import Header from "./Header";
import Weather from "./Weather";
import { WeatherContext } from "../context/context";

const Home = () => {
  const context = useContext(WeatherContext);

  return (
    <div>
      <Header />
      <Weather data={context} />
    </div>
  );
};

export default Home;
