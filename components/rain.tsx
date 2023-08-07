import React from "react";
import { Progress } from "@mantine/core";

export default function Rain() {
  return (
    <>
      <div className="grid gap-4 mt-4">
        <h3>Chances of Rain</h3>
        <div className="grid gap-6">
          <div className="flex justify-between">
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
          <div className="flex justify-between">
            <p>7am</p>
            <Progress
              value={84}
              label="84%"
              size={28}
              radius="xl"
              color="#999eb4"
              className="w-[80%]"
            />
          </div>
          <div className="flex justify-between">
            <p>7am</p>
            <Progress
              value={67}
              label="67%"
              size={28}
              radius="xl"
              color="#999eb4"
              className="w-[80%]"
            />
          </div>
          <div className="flex justify-between">
            <p>7am</p>
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
    </>
  );
}
