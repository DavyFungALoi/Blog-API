import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "../src/components/layout/layout"
function App() {
  const [users, setUsers] = useState([]);
  const [hasError, setErrors] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'http://localhost:5000/blog/user',
        {
          mode: "cors",
          method: "GET",
        }
      );
      const data = await response.json();
      setUsers(data.users_list);
    }
    fetchData()
  }, []);

  return (
    <div className="App">
      <Layout/>
      <div>Front-End Reader hellothere</div>
      <div>
        {users.map(user => ( 
          <div key={user._id}>{user.first_name}</div>
        ))}
        
      </div>
    </div>
  );
}

export default App;

/*

https://jsonplaceholder.typicode.com/posts
{users.map(post => ( 
          <li key={post.id}>{post.title}</li>
        ))}

*/
/*
useEffect(() => {

  <div>{(typeof users.users_list !== 'undefined' ? users.users_list[0].first_name : '')}</div>
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
    fetchData()
  }, []);


    
      <div>{(typeof users.users_list !== 'undefined' ? users.users_list[0].first_name : '')}</div>
      <div>{(typeof users.users_list !== 'undefined' ? users.users_list[0].last_name : '')}</div>
*/
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
