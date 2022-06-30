import React from "react";
import "./Profile.css";

function Profile(props) {
  const dataTemp = props.data;
  console.log(dataTemp[0]);
  return (
    <>
      <div className="profile">
        <div className="username">
          <h1>{dataTemp[0].owner.login}</h1>
        </div>
        <div className="profile-image">
          <img src={dataTemp[0].owner.avatar_url} alt="user" />
        </div>
        <div className="profile-link">
          <a href={dataTemp[0].owner.html_url}>{dataTemp[0].owner.html_url}</a>
        </div>
      </div>
    </>
  );
}

export default Profile;
