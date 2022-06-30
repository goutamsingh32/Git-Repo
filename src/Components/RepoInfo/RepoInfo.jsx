import React, { useState } from "react";
import "./ReposInfo.css";
import InfiniteScroll from "react-infinite-scroll-component";

function RepoInfo(props) {
  function handleChange(event) {
    var temp = event.target.value;
    console.log(temp);
    props.setPrefix(temp);
  }

  return (
    <>
      <div className="search-bar">
        <nav className="navbar navbar-light bg-light justify-content-between">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleChange}
          />
        </nav>
      </div>

      <InfiniteScroll dataLength={props.data.length}>
        <div className="RepoInfo">
          {props.data.map((repo) => {
            return repo.name
              .split(" ")
              .join("")
              .toLowerCase()
              .startsWith(props.prefix.split(" ").join("").toLowerCase()) ? (
              <div className="repos">
                <div className="repo-title">
                  <a href={repo.html_url}>
                    <h2>{repo.name}</h2>
                  </a>
                </div>

                <div className="repo-description">
                  <p>{repo.description}</p>
                </div>

                <div className="languages">
                  {repo.language ? (
                    <span className="lang">{repo.language}</span>
                  ) : null}
                </div>
              </div>
            ) : null;
          })}
        </div>
      </InfiniteScroll>
    </>
  );
}
export default RepoInfo;
