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
  console.log(Season);

  return <div>season display</div>;
};

export default SeasonDisplay;
