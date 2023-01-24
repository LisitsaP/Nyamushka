import React from "react";
import packages from "../data/packages";
import Package from "./Package";
// import { useState } from "react";

export default function Packages() {
  // const [selected, setSelected] = useState(falce);
  // const activitySelection = (activity) => {
  //   setSelected(!selected);
  // };
  return (
    <div className="items">
      {packages.map((packag) => {
        return <Package {...packag} key={packag.id} className="it" />;
      })}
    </div>
  );
}
