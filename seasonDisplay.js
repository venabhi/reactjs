import React from "react";

// determining season
const GetSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const Season = GetSeason(props.lat, new Date().getMonth());
  const text = Season === "winter" ? "it is chilly" : "lets hit the beach";

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default SeasonDisplay;
