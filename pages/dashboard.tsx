import React, { FormEvent, useEffect, useState } from "react";
import withAuth from "@/components/protected-routes";
import CustomButton from "@/components/auth/button";
import Navbar from "@/components/navbar";
import Weather from "@/components/weather";
import axios from "axios";
import { Button } from "@mantine/core";

function weather() {
  // const [city, setCity] = useState("");
  // const [weather, setWeather] = useState({});
  // const [loading, setLoading] = useState(false);

  // const url = `http://api.weatherapi.com/v1/current.json?key=74bcc7f8f64d449db7b103222230808&q=${city}&aqi=no`;

  // const Climate = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     const res = await axios.get(url);
  //     setWeather(res.data);
  //     setCity("");
  //   } catch (error) {
  //     console.error("Error fetching weather data:", error);
  //   }

  //   setLoading(false);
  // };

  return (
    <>
      <div>
        <Navbar />
        <Weather />
      </div>
    </>
  );
}

export default withAuth(weather);
