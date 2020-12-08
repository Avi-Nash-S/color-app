import React, { useState } from "react";
import ColorGrid from "../components/colorGrid.component";
import { wordToColor } from "../utils";
import classes from "./landingPage.module.css";

function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [colorList, setColorList] = useState([]);
  const handleSubmit = () => setColorList(wordToColor(searchQuery));
  const validSearchQuery = searchQuery && searchQuery.length > 0 ? true : false;
  return (
    <React.Fragment>
      <div className={classes.root_control}>
        <input
          className={classes.searchInput}
          placeholder="Enter a word..."
          onChange={(e) => setSearchQuery(e.target.value.toString())}
          onKeyPress={(e) =>
            e.key === "Enter" && validSearchQuery && handleSubmit()
          }
        />
        <button
          className={classes.searchButton}
          onClick={() => validSearchQuery && handleSubmit()}
        >
          Go!
        </button>
      </div>
      <div className={classes.root_cardList}>
        {colorList.map((color, index) => (
          <React.Fragment key={color + index}>
            <ColorGrid color={color} />
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
}

export default LandingPage;
