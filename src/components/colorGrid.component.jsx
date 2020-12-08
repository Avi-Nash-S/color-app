import React from "react";
import classes from "./colorGrid.module.css";

function ColorGrid({ color }) {
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <span className={classes.textHolder}>{color}</span>
    </div>
  );
}

export default ColorGrid;
