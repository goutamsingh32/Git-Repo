import React from "react";
import "./DashBoard.css";
import RepoInfo from "../RepoInfo/RepoInfo";
import Profile from "../Profile/Profile";

function DashBoard(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="column left">
            <Profile data={props.data} />
          </div>
          <div className="column right">
            <RepoInfo
              data={props.data}
              prefix={props.prefix}
              setPrefix={props.setPrefix}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default DashBoard;
