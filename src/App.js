import React, { Component } from "react";
import {
  InstantSearch,
  SearchBox,
  Pagination,
  Configure,
  Panel,
  RefinementList,
} from "react-instantsearch-dom";
import "./App.css";
import Stats from "./components/Stats";
import Content from "./components/Content";
import CustomRatingMenu from "./components/RatingMenu";

class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="EFD20TMYK0"
        apiKey="b2086c706551a8ed8c72eee3df91e6eb"
        indexName="restaurants"
      >
        <main className="search-container">
          <Configure
            hitsPerPage={5}
            attributesToHighlight={["price", "name"]}
            attributesToSnippet={["address:24"]}
            snippetEllipsisText=" [...]"
          />
          <div className="right-panel">
            <div id="hits">
              {/* Uncomment the following widget to add hits list */}
              <Content />
            </div>
            <div id="searchbox">
              {/* Uncomment the following widget to add a search bar */}
              <SearchBox
                translations={{ placeholder: "Search for restaurants ..." }}
              />
            </div>
            <div id="stats">
              {/* Uncomment the following widget to add search stats */}
              <Stats />
            </div>
            <div id="pagination">
              {/* Uncomment the following widget to add pagination */}
              <Pagination />
            </div>
          </div>
          <div className="left-panel">
            <div id="brands">
              <Panel header="Rating">
                <CustomRatingMenu
                  attribute="rounded_stars_count"
                  // defaultRefinement={{ min: 2 }}
                  translations={{
                    ratingLabel: "& Up",
                  }}
                />
              </Panel>
            </div>
            <div id="brands">
              <Panel header="Sort by cuisine">
                <RefinementList attribute="food_type" searchable />
              </Panel>
            </div>
          </div>
        </main>
      </InstantSearch>
    );
  }
}

export default App;
