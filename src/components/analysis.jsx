import React, { forwardRef } from "react";
import { ResponsivePie } from "@nivo/pie";

const Sidebar = forwardRef((props, ref) => (
  <div ref={ref} className="justify-center m-10">
    <h1 className= "text m-10 mt-30 font-extrabold text-4xl justify-self-center">Expense Analysis</h1>
    <div className="h-[90vh] opacity-90">
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
  </div>
));

export default Sidebar;
