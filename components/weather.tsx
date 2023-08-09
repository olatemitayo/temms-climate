import { UserDetails } from "@/pages/_app";
import React, { useEffect, useState } from "react";
import { Progress, clsx } from "@mantine/core";
import axios from "axios";
import { TextInput } from "@mantine/core";
import CustomButton from "./auth/button";

type weatherType = {
  current: {
    condition?: {
      text?: string;
      icon?: string;
    };
    feelslike_c?: number;
    wind_kph?: number;
    uv?: number;
    pressure_mb?: number;
    feelslike_f?: number;
    humidity?: number;
    temp_c?: number;
    precip_mm: number;
    wind_dir: string;
  };
  location: {
    country?: string;
    name?: string;
    localtime?: string;
    region?: string;
    lat: number;
    lon: number;
    tz_id: string;
  };
};

export default function Weather() {
  const [title, setTitle] = useState<UserDetails>(null);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<weatherType | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("my-user")) {
      setTitle(JSON.parse(localStorage.getItem("my-user") as string));
    }

    return () => {};
  }, []);

  const url = `http://api.weatherapi.com/v1/current.json?key=74bcc7f8f64d449db7b103222230808&q=${city}&aqi=no`;

  const Climate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.get(url);
      setWeather(res.data);
      setCity("");
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
    setLoading(false);
  };

  return (
    <main className="">
      <div className="max-w-[1500px] mx-auto py-4 px-[clamp(20px,3vw,35px)] flex flex-col justify-center">
        <form onSubmit={Climate} className="flex gap-2 ">
          <TextInput
            placeholder="search location..."
            radius="md"
            size="lg"
            className="w-[50%] md:w-full xl:w-[40%]"
            onChange={(e) => setCity(e.target.value)}
          />
          <CustomButton text="search" type="submit" />
        </form>
      </div>
      {weather ? (
        <div className="mx-auto  flex cmd:flex-col-reverse justify-between items-center px-[clamp(20px,3vw,40px)] py-[clamp(10px,2vw,16px)] max-w-[1500px] gap-4 ">
          <div className="w-[70%] cmd:w-[100%] max-h-[100%] min-h-[550px]   px-[clamp(20px,3vw,35px)] py-[clamp(10px,2vw,16px)] border border-[#f0eeee] rounded-2xl">
            <div className="">
              <div className="">
                <h1 className="mb-4  text-[#2c3f7d]">Today's overview</h1>
                <div className="flex flex-wrap items-center justify-between gap-3 ">
                  <div className="bg-[#f0eeee] min-w-[165px] p-[clamp(5px,2vw,20px)] rounded-lg flex gap-4 items-center justify-center csm:w-[100%] csm:justify-around">
                    <img src="/wind.svg" alt={"wind"} className="w-[24px]" />
                    <div className="">
                      <p className="text-[clamp(12px,1vw,16px)]  text-[#2c3f7d]">
                        Wind Speed
                      </p>
                      <h1 className="text-[clamp(24px,1vw,28px)] font-medium">
                        {weather?.current?.wind_kph}km/h
                      </h1>
                    </div>
                  </div>
                  <div className="bg-[#f0eeee] min-w-[165px] p-[clamp(5px,2vw,20px)] rounded-lg flex gap-4 items-center justify-center csm:w-[100%] csm:justify-around">
                    <img
                      src="/humidity-low.svg"
                      alt={"feel"}
                      className="w-[24px]"
                    />
                    <div className="">
                      <p className="text-[clamp(12px,1vw,16px)] text-[#2c3f7d]">
                        Humidity
                      </p>
                      <h1 className="text-[clamp(24px,2vw,28px)] ">
                        {weather?.current?.humidity}%
                      </h1>
                    </div>
                  </div>
                  <div className="bg-[#f0eeee] min-w-[165px] p-[clamp(5px,2vw,20px)] rounded-lg flex gap-4 items-center justify-center csm:w-[100%] csm:justify-around">
                    <img
                      src="/wave-line.svg"
                      alt={"ddd"}
                      className="w-[24px]"
                    />
                    <div className="">
                      <p className="text-[clamp(12px,1vw,16px)] text-[#2c3f7d]">
                        Pressure
                      </p>
                      <h1 className="text-[clamp(24px,2vw,28px)] ">
                        {weather?.current?.pressure_mb} hpa
                      </h1>
                    </div>
                  </div>
                  <div className="bg-[#f0eeee] min-w-[165px] p-[clamp(5px,2vw,20px)] rounded-lg flex gap-4 items-center justify-center csm:w-[100%] csm:justify-around ">
                    <img src="/sun.svg" alt={"uv"} className="w-[24px]" />
                    <div className="">
                      <p className="text-[clamp(12px,1vw,16px)] text-[#2c3f7d]">
                        Uv Index
                      </p>
                      <h1 className="text-[clamp(24px,2vw,28px)] ">
                        {weather?.current?.uv}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <img src="/sunny.svg" alt="" className="w-[40px]" />
              <div className="flex items-center justify-between gap-2 cmd:flex-col cmd:items-start">
                <h1 className=" text-[#2c3f7d]">Average Weekly Temperature</h1>

                <div>
                  <p className="text-[#999eb4]">{}</p>
                </div>
              </div>
            </div>
            <div className="h-[20%]">
              <div className="grid gap-4 mt-4">
                <div className="flex items-center gap-8">
                  <h3>Chances of Rain</h3>
                  <span className="text-red-600">
                    *real life data not currently available
                  </span>
                </div>
                <div className="grid gap-6">
                  <div className="flex items-center justify-between">
                    <p>7am</p>
                    <Progress
                      value={75}
                      label="75%"
                      size={28}
                      radius="xl"
                      color="#999eb4"
                      className="w-[80%]"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <p>8am</p>
                    <Progress
                      value={84}
                      label="84%"
                      size={28}
                      radius="xl"
                      color="#999eb4"
                      className="w-[80%]"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <p>9am</p>
                    <Progress
                      value={67}
                      label="67%"
                      size={28}
                      radius="xl"
                      color="#999eb4"
                      className="w-[80%]"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <p>10 am</p>
                    <Progress
                      value={50}
                      label="50%"
                      size={28}
                      radius="xl"
                      color="#999eb4"
                      className="w-[80%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 cmd:w-[100%] mcmd:min-h-[550px] rounded-2xl bg-[#172658]  px-[clamp(20px,3vw,35px)] py-[clamp(10px,2vw,20px)] text-[#fff]">
            <div className="">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="">{title?.data?.username}</h1>
                  <p>{`${weather?.location?.name} ${weather?.location?.region}`}</p>
                  <p>{weather?.location?.country}</p>
                </div>
                <div>
                  <h1>{weather?.location?.localtime.slice(-5)}</h1>
                  <p>{weather?.location?.localtime.slice(0, 10)}</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <img
                src={weather?.current?.condition?.icon}
                alt=""
                className="w-[40px]"
              />
              <div className="flex items-center justify-between">
                <h1 className="text-[40px]">{weather?.current?.temp_c}°C</h1>

                <p>{weather?.current?.condition?.text}</p>
              </div>
            </div>
            <div>
              <div className="grid gap-4 mt-4">
                <div className="flex justify-between">
                  <h3>Latitude</h3>
                  <h3>{weather?.location?.lat}</h3>
                </div>
                <div className="flex justify-between">
                  <h3>Longitude</h3>
                  <h3>{weather?.location?.lon}</h3>
                </div>
                <div className="flex justify-between">
                  <h3>Feels like</h3>
                  <h3>{weather?.current?.feelslike_c}°C</h3>
                </div>
                <div className="flex justify-between">
                  <h3>Precipitation</h3>
                  <h3>{weather?.current?.precip_mm}mm</h3>
                </div>
                <div className="flex justify-between">
                  <h3>Wind Direction</h3>
                  <h3>{weather?.current?.wind_dir}</h3>
                </div>
                <div className="flex justify-between">
                  <h3>Region</h3>
                  <h3>{weather?.location?.tz_id}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[80vh] m-auto flex-wrap">
          <p className="text-[clamp(1.5rem,3vw,3rem)] ">
            Hello{" "}
            <span className="text-[#172658] font-bold">
              {title?.data?.username},
            </span>{" "}
            search for any location
          </p>
        </div>
      )}
    </main>
  );
}
