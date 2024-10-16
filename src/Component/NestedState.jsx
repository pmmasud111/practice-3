import React, { useState } from "react";
import { initialTravelPlan } from "./NestedStateData";
import PlaceTree from "./PlaceTree";

export default function NestedState() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planets = root.childIds;
  return (
    <>
      <h1>Place To Visite</h1>
      <ol>
        {planets.map((id) => (
          <PlaceTree key={id} id={id} placesById={plan} />
        ))}
      </ol>
    </>
  );
}
