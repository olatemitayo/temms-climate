import React from "react";

const Data = [
  {
    id: "1",
    element: "Wind Speed",
    volume: "12km/h",
    img: "/wind.svg",
  },
  {
    id: "2",
    element: "Rain chance",
    volume: "24%",
    img: "/wind.svg",
  },
  {
    id: "3",
    element: "Pressure",
    volume: "720 hpa",
    img: "/wave-line.svg",
  },
  {
    id: "4",
    element: "Uv Index",
    volume: "2,3",
    img: "/sun.svg",
  },
];
export default function Overview() {
  return (
    <>
      <div>
        <div className="">
          <h1 className="mb-4  text-[#2c3f7d]">Today's overview</h1>
          <div className="flex flex-wrap items-center justify-between gap-3 ">
            {Data.map((item) => (
              <div
                key={item.id}
                className="bg-[#f0eeee] min-w-[96.06px] p-[clamp(5px,2vw,20px)] rounded-lg flex gap-4 items-center justify-center "
              >
                <img
                  src={item.img}
                  alt={item.element}
                  className="w-[clamp(12px,2vw,24px)]"
                />
                <div className="">
                  <p className="text-[clamp(10px,1vw,16px)]">{item.element}</p>
                  <h1 className="text-[clamp(16px,1vw,24px)] ">
                    {item.volume}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
