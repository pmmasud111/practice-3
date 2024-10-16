import React from "react";

export default function PlaceTree({ id, placesById }) {
  const Place = placesById[id];
  const childIds = Place.childIds;
  return (
    <li>
      {Place.title}
      {childIds.length > 0 && (
        <ol>
          {childIds.map((id) => (
            <PlaceTree key={id} id={id} placesById={placesById} />
          ))}
        </ol>
      )}
    </li>
  );
}
