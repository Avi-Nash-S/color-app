import React, { useState } from "react";
import ColorGrid from "../components/colorGrid.component";
import classes from "./landingPage.module.css";

function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [colorList, setColorList] = useState([{ hex: "Color A Word" }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = () => {
    setLoading(true);
    // TODO: Move to services, when application is extended with more APIs
    let url = new URL(
      "https://cors-anywhere.herokuapp.com/" +
        "http://www.colourlovers.com/api/colors"
    );
    url.search = new URLSearchParams({
      keywords: searchQuery,
      format: "json",
      numResults: 20,
    });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setColorList(data);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };
  const validSearchQuery = searchQuery && searchQuery.length > 0 ? true : false;
  return (
    <React.Fragment>
      <div className={classes.root_control}>
        <input
          className={classes.searchInput}
          placeholder="Enter a word..."
          onChange={(e) => setSearchQuery(String(e.target.value).toLowerCase())}
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
      {error ? (
        <p>Something went wrong</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : colorList && colorList.length ? (
        <div className={classes.root_cardList}>
          {colorList.map((color, index) => (
            <React.Fragment key={color.hex + index}>
              <ColorGrid color={`#${color.hex}`} />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <p>Oops! No Data Found</p>
      )}
    </React.Fragment>
  );
}

export default LandingPage;
