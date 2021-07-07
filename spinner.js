import React from "react";

const Spin = (props) => {
  return (
    <div className="ui active loader">
      <div className="text loader">{props.message}</div>
    </div>
  );
};

// if we not given props message default can override automatically default props are objects sipn.defaultprops = {}
Spin.defaultprops = {
  message: "loading",
};
export default Spin;
