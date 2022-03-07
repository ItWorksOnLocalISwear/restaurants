import { connectRange } from "react-instantsearch-dom";
import React from "react";

const RatingMenu = ({ currentRefinement, refine }) => (
  <ul>
    {new Array(4).fill(null).map((_, index) => (
      <li key={index}>
        <a
          href="#"
          style={{
            color: currentRefinement.min === 5 - index ? "gold" : "",
            textDecoration: "none",
          }}
          onClick={(event) => {
            event.preventDefault();
            refine({ min: 5 - index });
          }}
        >
          {new Array(5)
            .fill(null)
            .map((__, innerIndex) => (innerIndex < 4 - index ? "★" : "☆"))}
        </a>
        <span> & up</span>
      </li>
    ))}
  </ul>
);

const CustomRatingMenu = connectRange(RatingMenu);

export default CustomRatingMenu;
