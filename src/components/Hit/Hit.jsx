import React from "react";
import PropTypes from "prop-types";
import algoliasearch from "algoliasearch";
import "./Hit.css";

const client = algoliasearch("EFD20TMYK0", "9eef9f03c4dee751ea1fd707d8d92a52");
const index = client.initIndex("restaurants");

export default Hit;
function Hit({ hit }) {
  return (
    <div className="hit">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="hit-image">
          <img src={hit.image_url} alt="restaurant_image" />
        </div>
        <div className="hit-content">
          <div className="text-content">
            <div className="hit-name">
              <h3>{hit.name}</h3>
            </div>
            <div className="hit-address">
              <p>Address: {hit.address}</p>
              <p>Rating: {hit.stars_count}</p>
            </div>
            <div className="hit-price">{hit.price_range}</div>
          </div>
        </div>
      </div>
      <div>
        <button
          style={{ padding: "5px", backgroundColor: "red", color: "white" }}
          onClick={() => index.deleteObject(hit.objectID)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};
