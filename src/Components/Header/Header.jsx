import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <>
      <div className="header--container">
        <div className="container header">
          <h1 className="header--logo">Git-Repo</h1>
        </div>
        {props.isValid ? (
          <button
            className="btn--home"
            onClick={() => {
              props.setValid(false);
              props.setPrefix("");
            }}
          >
            Home
          </button>
        ) : null}
      </div>
    </>
  );
}

export default Header;
