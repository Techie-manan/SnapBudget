import React from "react";
import { useState } from "react";
import { ResponsivePie } from "@nivo/pie";

export default () => (
  <div className="h-80">
    <ResponsivePie
      data={[
        { id: "Cats", value: 55, color: "#6366f1" },
        { id: "Dogs", value: 35, color: "#06b6d4" },
        { id: "Fish", value: 10, color: "#f97316" },
      ]}
      margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
      innerRadius={0.5}
      padAngle={2}
      cornerRadius={3}
      colors={{ datum: "data.color" }}
    />
  </div>
);
