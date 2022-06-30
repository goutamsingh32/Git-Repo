import React, { useState } from "react";
import "./Home.css";

// import https from "https";
import Axios from "axios";

function Home(props) {
  const [username, setUsername] = useState("");

  function handelChange(event) {
    var value = event.target.value;
    setUsername(value);
  }

  function handleClick(event) {
    var url = "https://api.github.com/users/" + username + "/repos";

    (async () => {
      try {
        const response = await Axios.get(url);
        console.log(response.status);

        if (response.status === 200) {
          props.setData(response.data);

          props.setValid(true);
        }
      } catch (error) {
        console.log(error.response.body);
      }
    })();

    event.preventDefault();
  }

  return (
    <>
      <div className="container">
        <div className="landing">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTrn7sX7yzFEtnU8ETNA57GHsZm9i57kBG8g&usqp=CAU"
            alt=".."
          />
          <div className="card">
            <h2>Github Repositories</h2>
            <form>
              <input
                key="username"
                name="username"
                className="form-control"
                type="search"
                placeholder="Enter a valid username "
                aria-label="Search"
                onChange={handelChange}
              />
              <button
                className="btn btn-outline-dark my-2 my-sm-0"
                type="submit"
                onClick={handleClick}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
