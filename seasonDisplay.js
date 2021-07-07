import React from "react";
import "./sd.css";

//  we can refactor the terinary exp
const SeasonConfig = {
  summer: {
    text: "let chill",
    icon: "sun",
  },
  winter: {
    text: "cool",
    icon: "beach",
  },
};

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
  const { text, icon } = SeasonConfig[Season];
  //   const text = Season === "winter" ? "it is chilly" : "lets hit the beach";
  //   const icon = season === "winter" ? "snowflake" : "sun";
  return (
    <div className={`sd ${Season}`}>
      <i className={` massive ${icon} icon`} />
      <h1>{text}</h1>
      <i className={` massive ${icon}icon`} />
    </div>
  );
};

export default SeasonDisplay;
