import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState();
  const [hasError, setErrors] = useState(false);


  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:5000/blog/user", {
        mode: "cors",
        method: "GET",
      });
      res
        .json()
        .then((res) => setUsers(res))
        .catch((err) => setErrors(err));
    }

    fetchData();
  });
  return (
    <div className="App">
      <div>Front-End Reader hellothere</div>
      <div>{JSON.stringify(users)}</div>
    </div>
  );
}

export default App;
/*
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
    });
    
*/
/*
  async function getUser() {
    const response = fetch("http://localhost:5000/blog/user", {
      mode: "cors",
      method: "GET",
    });
    const userData = await (await response).json();
    console.log(userData);
    console.log(userData.users_list[0].first_name);
    const userName = userData.users_list[0].first_name;
  }

  */
